import { motion, useAnimation } from "framer-motion";
import { Phone, ShieldCheck, Wifi, Zap, Sparkles, CheckCircle2, Clock, TrendingUp, ArrowRight, Users, Award, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicHeroBackground from "./DynamicHeroBackground";
import { useEffect } from "react";

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <section id="home" className="relative overflow-x-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white py-16 sm:py-24 lg:py-32 min-h-screen flex items-center">
      {/* Dynamic Animated Background */}
      <DynamicHeroBackground />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-indigo-300/30 px-5 py-2.5 shadow-lg"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-gray-700">
                  🏆 Trusted Third-Party Service Provider
                </span>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
            >
              <motion.span
                className="block text-gray-900 mb-2"
                whileHover={{ scale: 1.02 }}
              >
                Internet & Cable
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Service Assistance
              </motion.span>
              
              {/* Animated accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-4 max-w-full overflow-hidden"
              >
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 bg-white/70 rounded-full"
                />
              </motion.div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Get expert guidance and informational support for{" "}
              <span className="font-semibold text-gray-900">internet, broadband, Wi-Fi, and cable TV</span> services from a dedicated third-party assistance provider.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-secondary text-white shadow-2xl shadow-primary/40 rounded-full px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg font-bold w-full sm:w-auto"
                >
                  <a href="tel:+18886815944">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <Phone className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Call (888) 681-5944</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-300 text-gray-900 hover:bg-indigo-50 hover:border-primary rounded-full px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg font-bold backdrop-blur-sm bg-white/70 shadow-xl w-full sm:w-auto"
                >
                  <a href="tel:+18886815944">
                    <Headphones className="mr-2 h-5 w-5" />
                    Talk to Expert
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + i * 0.1, type: "spring" }}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs"
                    >
                      {i}K
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">2500+</p>
                  <p className="text-gray-600 text-xs">Satisfied Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                      className="text-yellow-400 text-lg sm:text-xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">4.8/5</p>
                  <p className="text-gray-600 text-xs">Rating</p>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-xs text-gray-500 mt-6 italic"
            >
              Not an ISP. Independent third-party service. No brand affiliation.
            </motion.p>
          </motion.div>

          {/* Right Column - Interactive Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative z-10 mt-12 lg:mt-0"
          >
            <div className="grid gap-4 sm:gap-6">
              {/* Main Feature Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(99, 102, 241, 0.4)" }}
                className="relative group bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-indigo-200/50 hover:border-primary transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
                    >
                      <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </motion.div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900">What We Do</h3>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                    {[
                      "Guide you through internet & broadband options",
                      "Provide practical connectivity solutions",
                      "Navigate service provider processes",
                      "Offer cable TV service support"
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-center gap-2 group/item"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="text-sm font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { icon: Users, value: "2.5K+", label: "Clients", color: "from-blue-500 to-cyan-500" },
                  { icon: Clock, value: "24/7", label: "Support", color: "from-purple-500 to-pink-500" },
                  { icon: Award, value: "4.8★", label: "Rating", color: "from-indigo-500 to-purple-500" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border border-gray-200/50 text-center group cursor-pointer"
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <p className="text-xl sm:text-2xl font-black text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs font-semibold text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Disclaimer Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-300/50 shadow-lg"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Important Notice</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      We are <strong>NOT an ISP</strong> and have <strong>no brand affiliations</strong>. We provide independent third-party guidance only.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
