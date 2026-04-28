import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/40" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/30 to-pink-400/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/25 to-indigo-400/25 rounded-full blur-3xl"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          className="absolute rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 backdrop-blur-sm"
        />
      ))}

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(99, 102, 241) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(99, 102, 241) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 100 200 Q 250 100 400 200 T 700 200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            pathLength: { duration: 3, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 1 }
          }}
        />
        <motion.path
          d="M 200 400 Q 400 300 600 400 T 900 400"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            pathLength: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 },
            opacity: { duration: 1 }
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-indigo-300/20 rounded-3xl"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-32 left-32 w-24 h-24 border-2 border-purple-300/20 rounded-2xl"
      />
    </div>
  );
};

export default AnimatedBackground;
