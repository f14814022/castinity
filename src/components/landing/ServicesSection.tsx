import { motion } from "framer-motion";
import { Wifi, Tv, PlayCircle, HelpCircle } from "lucide-react";
import wifiImg from "@/assets/wifi-router.jpg";
import devicesImg from "@/assets/connected-devices.jpg";
import laptopImg from "@/assets/person-laptop-wifi.jpg";

const services = [
  {
    icon: Wifi,
    image: wifiImg,
    title: "Internet & Broadband Guidance",
    desc: "We assist you in understanding various internet and broadband service options available in your area. Our team provides informational support to help you make informed decisions.",
  },
  {
    icon: Tv,
    image: devicesImg,
    title: "Cable TV Informational Support",
    desc: "Receive general guidance about cable TV services, channel options, and how to navigate provider processes. We facilitate your understanding — we do not sell services.",
  },
  {
    icon: PlayCircle,
    image: laptopImg,
    title: "Streaming Setup Assistance",
    desc: "Get independent help with understanding streaming platforms and setup processes. Our guidance is informational only and separate from any provider service.",
  },
];

const ServicesSection = () => (
  <section id="services" className="overflow-x-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
          Our Assistance Services
        </span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          How We <span className="text-gradient">Support You</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-300">
          We provide guidance and informational support — we do not sell or provide internet, cable, or streaming services directly.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 group rounded-2xl overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="h-48 overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-gray-400">
        Our service fees are separate from any provider charges. We charge for our independent assistance only.
      </p>
    </div>
  </section>
);

export default ServicesSection;
