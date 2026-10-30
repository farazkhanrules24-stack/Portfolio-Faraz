"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { validateContactInput } from "@/lib/validation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isDevMode, setIsDevMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Client-Side Validation
    const validation = validateContactInput(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatus("error");
      setFeedbackMessage("Please review the highlighted fields below.");
      return;
    }

    setErrors({});
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setFeedbackMessage(
          data.error || "Unable to send your message right now. Please try again or reach out directly via email."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
        return;
      }

      // Success
      setStatus("success");
      setFeedbackMessage(data.message);
      setIsDevMode(data.mode === "development-logged");

      // Reset form fields on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
      setFeedbackMessage("Network error: Could not connect to the server. Please check your internet connection.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 backdrop-blur-xl shadow-xl transition-colors"
    >
      {/* Anti-spam Honeypot (hidden from sighted users and screen readers) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-honeypot">Leave empty</label>
        <input
          id="website-honeypot"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name & Email Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
            Your Name <span className="text-blue-600 dark:text-cyan-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Faraz"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              errors.name ? "border-rose-500 bg-rose-50 dark:bg-rose-950/10" : "border-slate-200 dark:border-slate-800 focus:border-cyan-400"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
            Your Email <span className="text-blue-600 dark:text-cyan-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              errors.email ? "border-rose-500 bg-rose-50 dark:bg-rose-950/10" : "border-slate-200 dark:border-slate-800 focus:border-cyan-400"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
          Subject <span className="text-blue-600 dark:text-cyan-400">*</span>
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Web Development Project Inquiry"
          required
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
            errors.subject ? "border-rose-500 bg-rose-50 dark:bg-rose-950/10" : "border-slate-200 dark:border-slate-800 focus:border-cyan-400"
          }`}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 font-mono">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.subject}</span>
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
          Message <span className="text-blue-600 dark:text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi Faraz, I came across your portfolio and would like to discuss..."
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-y ${
            errors.message ? "border-rose-500 bg-rose-50 dark:bg-rose-950/10" : "border-slate-200 dark:border-slate-800 focus:border-cyan-400"
          }`}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.message ? (
            <p id="message-error" className="text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          ) : (
            <span className="text-[11px] font-mono text-slate-500">Min 10 characters</span>
          )}
          <span className="text-[11px] font-mono text-slate-500">
            {formData.message.length}/2000
          </span>
        </div>
      </div>

      {/* Feedback Messages (Success / Error) */}
      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{isDevMode ? "Notice (Development Mode)" : "Message Sent Successfully"}</p>
            <p className="text-xs mt-1 leading-relaxed opacity-95">{feedbackMessage}</p>
          </div>
        </div>
      )}

      {status === "error" && feedbackMessage && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-200 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Notice</p>
            <p className="text-xs mt-1 leading-relaxed opacity-95">{feedbackMessage}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
