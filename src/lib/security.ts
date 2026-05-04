const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "sharklasers.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "dispostable.com",
  "trashmail.com",
  "getnada.com",
]);

const RATE_LIMIT_PREFIX = "Heliorabeam-rate-limit:";

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

export function sanitizeText(value: string, maxLength = 500) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function sanitizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function normalizeUsPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }
  return digits;
}

export function formatUsPhone(value: string) {
  const digits = normalizeUsPhone(value);
  if (digits.length !== 10) return value;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function validateEmail(value: string) {
  const email = sanitizeEmail(value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!email) return "Email is required.";
  if (!emailRegex.test(email)) return "Enter a valid email address.";

  const domain = email.split("@")[1];
  if (domain && DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return "Disposable email addresses are not allowed.";
  }

  return "";
}

export function validateUsPhone(value: string) {
  const phone = normalizeUsPhone(value);

  if (!phone) return "Phone number is required.";
  if (phone.length !== 10) return "Enter a valid US phone number.";

  return "";
}

export function checkRateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  if (typeof window === "undefined") {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  const storageKey = `${RATE_LIMIT_PREFIX}${key}`;
  const now = Date.now();

  let attempts: number[] = [];
  try {
    attempts = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]") as number[];
  } catch {
    attempts = [];
  }

  const recentAttempts = attempts.filter((timestamp) => now - timestamp < windowMs);
  if (recentAttempts.length >= limit) {
    const oldestRecentAttempt = recentAttempts[0];
    const retryAfterSeconds = Math.max(1, Math.ceil((windowMs - (now - oldestRecentAttempt)) / 1000));
    window.localStorage.setItem(storageKey, JSON.stringify(recentAttempts));
    return { allowed: false, retryAfterSeconds };
  }

  recentAttempts.push(now);
  window.localStorage.setItem(storageKey, JSON.stringify(recentAttempts));
  return { allowed: true, retryAfterSeconds: 0 };
}
