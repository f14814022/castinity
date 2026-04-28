import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import testimonialWoman from "@/assets/testimonial-woman.jpg";
import testimonialMan from "@/assets/testimonial-man.jpg";

const testimonials = [
  {
    quote: "The team guided me through understanding my connectivity options. Their independent advice was clear and helpful — I felt supported the whole way.",
    name: "Emily R.",
    role: "Homeowner",
    image: testimonialWoman,
  },
  {
    quote: "I appreciated how transparent they were about being a third-party service. The guidance I received helped me feel more confident navigating my provider.",
    name: "James K.",
    role: "Small Business Owner",
    image: testimonialMan,
  },
];

const TestimonialsSection = () => (
  <section className="overflow-x-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
          Testimonials
        </span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col gap-6 rounded-2xl p-8 sm:flex-row"
          >
            <div className="shrink-0">
              <img src={t.image} alt={t.name} loading="lazy" width={80} height={80} className="h-20 w-20 rounded-2xl object-cover" />
            </div>
            <div>
              <Quote className="mb-2 h-6 w-6 text-primary/40" />
              <p className="mb-4 text-gray-300 italic">"{t.quote}"</p>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display font-bold text-white">{t.name}</p>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
