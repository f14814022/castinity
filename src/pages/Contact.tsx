import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Contact = () => (
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
          {/* Contact info */}
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

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                    <input type="text" className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                    <input type="text" className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input type="email" className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input type="tel" className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea rows={4} className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we assist you?" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-semibold">
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
                  By submitting, you acknowledge that Castinity is a third-party assistance provider.
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

export default Contact;
