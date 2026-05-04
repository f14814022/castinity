import { motion } from "framer-motion";
import { Wifi, Tv, PlayCircle, Headphones, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import wifiImg from "@/assets/wifi-router.jpg";
import devicesImg from "@/assets/connected-devices.jpg";
import laptopImg from "@/assets/person-laptop-wifi.jpg";

const services = [
  {
    icon: Wifi,
    image: wifiImg,
    title: "Internet & Broadband Guidance",
    desc: "We help you understand internet and broadband service options. Our advisors provide general informational support about connectivity types, service tiers, and common setup processes.",
    points: [
      "Understand different internet connection types",
      "Learn about broadband service categories",
      "Get guidance on common connectivity questions",
      "Receive informational support — not provider services",
    ],
  },
  {
    icon: Tv,
    image: devicesImg,
    title: "Cable TV Informational Assistance",
    desc: "Receive general guidance about cable TV services. We help you understand channel packages, service categories, and how to navigate provider processes independently.",
    points: [
      "Understand cable TV service categories",
      "Learn about channel package structures",
      "Get guidance on navigating provider processes",
      "Third-party assistance separate from providers",
    ],
  },
  {
    icon: PlayCircle,
    image: laptopImg,
    title: "Streaming Setup Support",
    desc: "Our team provides independent informational support for understanding streaming platforms, device compatibility, and general setup guidance.",
    points: [
      "Understand streaming platform options",
      "Learn about device compatibility",
      "Get general setup guidance",
      "Unbiased information only",
    ],
  },
];

const Services = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">Our Services</span>
          <h1 className="font-display text-4xl font-black text-foreground sm:text-5xl">
            Assistance <span className="text-gradient">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We provide guidance and informational support. We do not sell or provide internet, cable, or streaming services directly. Our service fees are separate from provider charges.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className={`grid items-center lg:grid-cols-2 ${i % 2 === 1 ? "direction-rtl" : ""}`}>
                <div className="h-64 lg:h-full">
                  <img src={s.image} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12" style={{ direction: "ltr" }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 text-center">
          <Headphones className="mx-auto mb-3 h-8 w-8 text-primary" />
          <h3 className="font-display text-xl font-bold text-foreground mb-2">Need Assistance?</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Our service fees are separate from any provider charges. We charge for our assistance only. Heliorabeam is not affiliated with, authorized by, or endorsed by any service provider.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
