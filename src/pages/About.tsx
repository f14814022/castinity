import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import aboutImg from "@/assets/about-team.jpg";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">About Us</span>
          <h1 className="font-display text-4xl font-black text-foreground sm:text-5xl">
            Who We <span className="text-gradient">Are</span>
          </h1>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="overflow-hidden rounded-3xl">
              <img src={aboutImg} alt="ConnectHub office" width={1024} height={600} className="w-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">About Castinity</h2>
            <p className="text-muted-foreground mb-4">
              Castinity is a third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services. Founded in 2026, we are a startup focused on helping users navigate the often-complex world of connectivity services.
            </p>
            <p className="text-muted-foreground mb-4">
              We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns.
            </p>
            <p className="text-muted-foreground">
              We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { icon: ShieldCheck, title: "Transparency First", desc: "We are upfront about who we are and what we do. No hidden agendas, no misleading claims — just honest guidance." },
            { icon: Users, title: "Client-Centered Support", desc: "Every interaction is designed to help you understand your options and feel confident about your connectivity decisions." },
            { icon: BookOpen, title: "Educational Approach", desc: "We believe informed users make better decisions. Our guidance is educational, practical, and always straightforward." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclosure */}
        <div className="glass-card rounded-2xl p-8 text-center">
          <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-primary" />
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Castinity is an independent third-party service assistance provider, launched in 2026. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
