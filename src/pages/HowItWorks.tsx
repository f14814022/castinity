import { motion } from "framer-motion";
import { Phone, MessageSquare, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Reach Out to Us",
    desc: "Contact our independent assistance team via phone or online. Let us know what connectivity-related questions you have.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Receive Guidance",
    desc: "Our advisors provide general informational support to help you understand your service options and navigate processes.",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Make Informed Decisions",
    desc: "With the knowledge and guidance we provide, you can confidently make your own decisions about connectivity services.",
  },
];

const HowItWorks = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">Process</span>
          <h1 className="font-display text-4xl font-black text-foreground sm:text-5xl">
            How Our <span className="text-gradient">Assistance Works</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Getting independent guidance is simple. Our process is designed to be transparent, educational, and pressure-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              <span className="absolute top-4 right-4 font-display text-5xl font-black text-primary/10">{s.step}</span>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What to expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 lg:p-12"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">What to Expect</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display font-bold text-foreground mb-3">During Your Session</h3>
              <ul className="space-y-3">
                {[
                  "A friendly greeting confirming our independent status",
                  "General informational guidance on your questions",
                  "Educational support — not provider services",
                  "No pressure, no sales tactics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground mb-3">Important Notes</h3>
              <ul className="space-y-3">
                {[
                  "Our service fees are separate from provider charges",
                  "We never request provider passwords or sensitive credentials",
                  "Provider billing remains unchanged",
                  "Refund requests may be submitted within 7–15 days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold">
            <a href="tel:+18886815944">
              <Phone className="mr-2 h-4 w-4" /> Call (888) 681-5944
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">Not an ISP. No brand affiliation. Independent assistance only.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default HowItWorks;
