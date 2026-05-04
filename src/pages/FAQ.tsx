import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are you an official cable or internet service provider?",
    a: "No. Heliorabeam is a third-party assistance platform. We are not an Internet Service Provider (ISP) and do not provide cable, internet, or streaming services directly.",
  },
  {
    q: "Do you sell internet, cable, or streaming plans?",
    a: "No. We provide guidance and informational assistance only. We do not sell, activate, or manage any internet, cable, or streaming subscriptions.",
  },
  {
    q: "Do you charge for your services?",
    a: "Yes. Our service fees are separate from any provider charges. We charge for the informational assistance and guidance we provide.",
  },
  {
    q: "Will I still be billed by my service provider?",
    a: "Yes. Your provider billing remains completely unchanged. Our service fee is a separate charge for the assistance we offer.",
  },
  {
    q: "Do you need my account passwords or sensitive information?",
    a: "No. We never request provider passwords, account credentials, or other sensitive information. Our guidance is informational and does not require access to your accounts.",
  },
  {
    q: "Which providers do you support?",
    a: "We may reference multiple providers for informational and guidance purposes only. We are not affiliated with, endorsed by, or authorized by any telecom, internet, or cable TV provider.",
  },
  {
    q: "Are your services refundable?",
    a: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on service type and whether assistance has already been delivered. Please review our Refund Policy page for full details.",
  },
  {
    q: "How do I contact you?",
    a: "You can reach us by phone at (888) 681-5944 or by email at support@heliorabeam.com. When you call, you'll hear: 'Thank you for calling Heliorabeam, a service assistance platform.'",
  },
  {
    q: "Are you affiliated with any internet or cable company?",
    a: "No. Heliorabeam is a third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.",
  },
];

const FAQ = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">FAQ</span>
          <h1 className="font-display text-4xl font-black text-foreground sm:text-5xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Find answers to common questions about our third-party assistance services.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-2xl border-none px-6">
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-12 glass-card rounded-2xl p-6 text-center">
          <p className="text-xs text-muted-foreground">
            Heliorabeam is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default FAQ;
