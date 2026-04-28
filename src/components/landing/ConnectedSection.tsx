import { motion } from "framer-motion";
import { CheckCircle2, Headphones } from "lucide-react";

const bullets = [
  "Speak with an independent advisor within minutes",
  "Receive guidance on multiple service categories",
  "Understand connectivity options at your own pace",
  "Get follow-up support via phone or email",
];

const ConnectedSection = () => (
  <section className="overflow-x-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            Get Assistance
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Let Us <span className="text-gradient">Guide You</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Our independent assistance team is ready to help you understand your options and navigate service-related processes.
          </p>
          <ul className="mt-8 space-y-5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-gray-300">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-sm rounded-3xl border border-primary/30 bg-white/5 backdrop-blur-xl p-8 neon-glow">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Headphones className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">Independent Assistance</p>
                <p className="text-xs text-gray-400">Third-Party Guidance</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Our service fee covers independent informational support. Provider billing remains separate and unchanged.
            </p>
            <div className="space-y-3">
              {["General connectivity guidance", "Service option education", "Process navigation help", "Follow-up support included"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mt-10 text-center text-xs text-gray-400 italic">
        Castinity is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
      </p>
    </div>
  </section>
);

export default ConnectedSection;
