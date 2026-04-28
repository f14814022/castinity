import { motion } from "framer-motion";
import { Headphones, Shield, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: Headphones,
    title: "Dedicated Assistance Team",
    desc: "Our trained advisors help you understand your connectivity options and guide you through common processes.",
    stat: "24/7",
    statLabel: "Support Available",
  },
  {
    icon: Shield,
    title: "Transparent & Independent",
    desc: "We operate independently from all service providers. Our guidance is unbiased and focused solely on helping you.",
    stat: "100%",
    statLabel: "Independent",
  },
  {
    icon: BookOpen,
    title: "Informational Resources",
    desc: "Access general educational materials about internet, broadband, and cable TV to make informed decisions.",
    stat: "500+",
    statLabel: "Help Articles",
  },
];

const BenefitsSection = () => (
  <section className="overflow-x-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
          Why Choose Us
        </span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Guidance You Can <span className="text-gradient">TRUST</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 group rounded-2xl p-8 transition-all hover:border-primary/30"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <b.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-white">{b.title}</h3>
            <p className="mb-6 text-sm text-gray-300">{b.desc}</p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <p className="font-display text-2xl font-black text-primary">{b.stat}</p>
              <p className="text-xs text-gray-300">{b.statLabel}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
