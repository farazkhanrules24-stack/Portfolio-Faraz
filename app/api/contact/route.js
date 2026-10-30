import { NextResponse } from "next/server";
import { validateContactInput, sanitizeText } from "@/lib/validation";

// Simple in-memory rate limiter per IP: max 5 messages per 10 minutes
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const records = rateLimitMap.get(ip) || [];
  const validRecords = records.filter((timestamp) => now - timestamp < windowMs);

  if (validRecords.length >= maxRequests) {
    return true;
  }

  validRecords.push(now);
  rateLimitMap.set(ip, validRecords);
  return false;
}

export async function POST(request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Validate inputs
    const { isValid, errors } = validateContactInput({
      name,
      email,
      subject,
      message,
      honeypot,
    });

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          errors,
          error: "Please check the form fields and correct the highlighted errors.",
        },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeText(name),
      email: sanitizeText(email),
      subject: sanitizeText(subject),
      message: sanitizeText(message),
      submittedAt: new Date().toISOString(),
    };

    // Check if real email service credentials are configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (resendApiKey && receiverEmail) {
      try {
        // Real dispatch using Resend API (Fetch based to avoid extra heavy SDK dependencies)
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Faraz Portfolio <onboarding@resend.dev>",
            to: [receiverEmail],
            reply_to: sanitizedData.email,
            subject: `[Portfolio Inquiry] ${sanitizedData.subject} from ${sanitizedData.name}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Portfolio Message</h2>
                <p><strong>From:</strong> ${sanitizedData.name} (&lt;${sanitizedData.email}&gt;)</p>
                <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
                <p><strong>Date:</strong> ${new Date(sanitizedData.submittedAt).toLocaleString()}</p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                <div style="white-space: pre-wrap; color: #334155; line-height: 1.6;">${sanitizedData.message}</div>
              </div>
            `,
          }),
        });

        if (!resendRes.ok) {
          const resendError = await resendRes.text();
          console.error("Resend delivery failed:", resendError);
          return NextResponse.json(
            {
              success: false,
              error: "Email delivery service reported an issue. Please contact directly via email.",
            },
            { status: 502 }
          );
        }

        return NextResponse.json({
          success: true,
          mode: "delivered",
          message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
        });
      } catch (err) {
        console.error("Error communicating with email service:", err);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to connect to email delivery provider.",
          },
          { status: 500 }
        );
      }
    }

    // Honest development fallback when credentials are not configured yet
    console.log("=================================================");
    console.log(" [PORTFOLIO CONTACT FORM - LOCAL PREVIEW MODE]");
    console.log(" From:    ", sanitizedData.name, `<${sanitizedData.email}>`);
    console.log(" Subject: ", sanitizedData.subject);
    console.log(" Time:    ", sanitizedData.submittedAt);
    console.log(" Message: ", sanitizedData.message);
    console.log(" Note: To send real emails, set RESEND_API_KEY in .env.local.");
    console.log("=================================================");

    return NextResponse.json({
      success: true,
      mode: "development-logged",
      message:
        "Message received in development mode! Because email delivery keys (RESEND_API_KEY) are not yet configured in .env.local, your message was securely logged to the server terminal. Check .env.example to configure live mail dispatch.",
    });
  } catch (error) {
    console.error("Contact API uncaught error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}
