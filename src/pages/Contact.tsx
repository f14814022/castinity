import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { checkRateLimit, formatUsPhone, normalizeUsPhone, sanitizeEmail, sanitizeText, validateEmail, validateUsPhone } from "@/lib/security";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

const initialFormState: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState | "form", string>>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "", form: "" }));
    setSuccessMessage("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sanitizedData = {
      firstName: sanitizeText(formData.firstName, 40),
      lastName: sanitizeText(formData.lastName, 40),
      email: sanitizeEmail(formData.email),
      phone: normalizeUsPhone(formData.phone),
      message: sanitizeText(formData.message, 800),
      website: sanitizeText(formData.website, 120),
    };

    if (sanitizedData.website) {
      setSuccessMessage("Thanks. Your request has been reviewed.");
      setFormData(initialFormState);
      return;
    }

    const nextErrors: Partial<Record<keyof ContactFormState | "form", string>> = {};

    if (!sanitizedData.firstName) nextErrors.firstName = "First name is required.";
    if (!sanitizedData.lastName) nextErrors.lastName = "Last name is required.";

    const emailError = validateEmail(sanitizedData.email);
    if (emailError) nextErrors.email = emailError;

    const phoneError = validateUsPhone(sanitizedData.phone);
    if (phoneError) nextErrors.phone = phoneError;

    if (!sanitizedData.message) {
      nextErrors.message = "Message is required.";
    } else if (sanitizedData.message.length < 20) {
      nextErrors.message = "Please add a little more detail so we can help properly.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccessMessage("");
      return;
    }

    const rateLimit = checkRateLimit("contact-form", 5, 5 * 60 * 1000);
    if (!rateLimit.allowed) {
      setErrors({ form: `Too many requests. Please wait ${rateLimit.retryAfterSeconds} seconds and try again.` });
      setSuccessMessage("");
      return;
    }

    setFormData(initialFormState);
    setErrors({});
    setSuccessMessage("Your request passed validation and anti-spam checks. For secure follow-up on this static campaign site, call (888) 681-5944 or email support@castinity.com.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">Contact</span>
            <h1 className="font-display text-4xl font-black text-foreground sm:text-5xl">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have questions about our assistance services? Reach out and our team will be happy to help.
            </p>
            <div className="mt-6">
              <a href="tel:+18886815944" className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
                <Phone className="h-7 w-7" />
                (888) 681-5944
              </a>
              <p className="text-sm text-muted-foreground mt-2">Call us directly for immediate assistance</p>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-8 space-y-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Contact Information</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Castinity is a third-party service assistance startup. We are here to provide guidance — not to sell provider services.
                  </p>
                </div>

                {[
                  { icon: Phone, label: "Phone", value: "(888) 681-5944", sub: "Mon–Fri, 9AM–6PM EST", link: "tel:+18886815944" },
                  { icon: Mail, label: "Email", value: "support@castinity.com", sub: "We respond within 24 hours", link: "mailto:support@castinity.com" },
                  { icon: MapPin, label: "Location", value: "6229 Lakewood DR W, University Place, WA 98457", sub: "Independent assistance nationwide" },
                  { icon: Clock, label: "Hours", value: "Monday – Friday", sub: "9:00 AM – 6:00 PM EST" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground text-sm">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-primary hover:underline text-sm font-semibold">{info.value}</a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      )}
                      <p className="text-muted-foreground text-xs">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={formData.website}
                    onChange={(event) => handleChange("website", event.target.value)}
                    className="hidden"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block" htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        maxLength={40}
                        value={formData.firstName}
                        onChange={(event) => handleChange("firstName", event.target.value)}
                        className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                        aria-invalid={Boolean(errors.firstName)}
                      />
                      {errors.firstName && <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block" htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        maxLength={40}
                        value={formData.lastName}
                        onChange={(event) => handleChange("lastName", event.target.value)}
                        className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                        aria-invalid={Boolean(errors.lastName)}
                      />
                      {errors.lastName && <p className="mt-1.5 text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      maxLength={120}
                      value={formData.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel-national"
                      inputMode="tel"
                      required
                      maxLength={18}
                      value={formData.phone}
                      onChange={(event) => handleChange("phone", event.target.value)}
                      onBlur={() => handleChange("phone", formatUsPhone(formData.phone))}
                      className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(555) 000-0000"
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      maxLength={800}
                      value={formData.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                      className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="How can we assist you?"
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {errors.form && <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{errors.form}</p>}
                  {successMessage && <p className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">{successMessage}</p>}

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-semibold">
                    Request Help
                  </Button>
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground mb-3">Or call us directly:</p>
                    <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary/10 rounded-full py-6 text-base font-semibold">
                      <a href="tel:+18886815944">
                        <Phone className="mr-2 h-5 w-5" />
                        (888) 681-5944
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you acknowledge that Castinity is a third-party assistance provider. This campaign page validates requests locally and does not store lead data in the browser.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 glass-card rounded-2xl p-6 text-center">
            <p className="text-xs text-muted-foreground">
              Castinity is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
