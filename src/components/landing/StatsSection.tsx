import { motion } from "framer-motion";
import { Users, MapPin, Star, HeartHandshake } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Clients Assisted" },
  { icon: MapPin, value: "200+", label: "Cities Reached" },
  { icon: Star, value: "4.8", label: "Client Satisfaction" },
  { icon: HeartHandshake, value: "100%", label: "Independent Service" },
];

const StatsSection = () => (
  <section className="overflow-x-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <s.icon className="h-7 w-7" />
            </div>
            <p className="font-display text-3xl font-black text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-gray-300">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
