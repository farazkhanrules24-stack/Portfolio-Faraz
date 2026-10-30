/**
 * Contact Form Validation Utilities
 * Shared between client-side form validation and server-side route validation.
 */

export const validateContactInput = ({ name, email, subject, message, honeypot }) => {
  const errors = {};

  // Anti-spam honeypot verification
  if (honeypot && honeypot.trim() !== "") {
    errors.bot = "Spam detected";
    return { isValid: false, errors };
  }

  // Name validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.name = "Please enter your name.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.trim().length > 100) {
    errors.name = "Name must be less than 100 characters.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || email.trim().length === 0) {
    errors.email = "Please enter your email address.";
  } else if (!emailRegex.test(email.trim())) {
    errors.email = "Please enter a valid email address (e.g. name@domain.com).";
  } else if (email.trim().length > 120) {
    errors.email = "Email must be less than 120 characters.";
  }

  // Subject validation
  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    errors.subject = "Please enter a subject.";
  } else if (subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  } else if (subject.trim().length > 150) {
    errors.subject = "Subject must be less than 150 characters.";
  }

  // Message validation
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    errors.message = "Please enter your message.";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters so I understand your inquiry.";
  } else if (message.trim().length > 2000) {
    errors.message = "Message must be less than 2000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Basic HTML sanitizer to strip dangerous script tags
 */
export const sanitizeText = (text) => {
  if (typeof text !== "string") return "";
  return text
    .replace(/<[^>]*>?/gm, "")
    .trim();
};
