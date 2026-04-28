import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import wifiImg from "@/assets/wifi-router.jpg";

const CTASection = () => (
  <section className="overflow-x-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 p-8 lg:p-16">
        <div className="pointer-events-none absolute -top-20 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img src={wifiImg} alt="WiFi router for internet connectivity" loading="lazy" width={800} height={600} className="h-auto max-h-[400px] w-auto rounded-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Need Service{" "}
              <span className="text-gradient">Assistance?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Speak with our advisors for informational support on internet, broadband, and cable TV services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow rounded-full px-7 py-6 text-base font-semibold">
                <a href="tel:+18886815944">
                  <Phone className="mr-2 h-4 w-4" /> Call (888) 681-5944
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-7 py-6 text-base font-semibold">
                <a href="tel:+18886815944">
                  <Phone className="mr-2 h-4 w-4" /> Talk to an Advisor
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-gray-400 italic">
              Not an ISP. Brand names, if mentioned, are used strictly for informational purposes only.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
