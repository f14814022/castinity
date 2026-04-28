import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import featureImg from "@/assets/person-laptop-wifi.jpg";

const points = [
  "Understand internet & cable service categories",
  "Navigate provider processes with independent help",
  "Receive informational support — not provider services",
];

const FeatureSection = () => (
  <section className="overflow-x-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-3xl">
            <img src={featureImg} alt="Person receiving independent guidance on a laptop" loading="lazy" width={800} height={600} className="w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            Our Approach
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            NAVIGATE SERVICES WITH{" "}
            <span className="text-gradient">INDEPENDENT GUIDANCE</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Our independent advisors help you understand your options — we do not sell, activate, or provide any internet or cable services.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-gray-300">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
