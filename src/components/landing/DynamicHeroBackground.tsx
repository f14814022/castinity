import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const DynamicHeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Network nodes
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.6)";
        ctx.fill();
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      // Draw connections
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach((nodeB) => {
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/50" />

      {/* Animated mesh canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -left-20 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-gradient-to-br from-indigo-400/30 to-purple-400/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-1/4 -right-20 w-[400px] sm:w-[500px] lg:w-[700px] h-[400px] sm:h-[500px] lg:h-[700px] bg-gradient-to-bl from-purple-400/25 to-pink-300/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute bottom-10 left-1/4 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-20 right-10 lg:top-32 lg:right-32 w-24 h-24 lg:w-40 lg:h-40 border border-indigo-300/20 rounded-3xl hidden md:block"
        style={{ transformStyle: "preserve-3d" }}
      />

      <motion.div
        animate={{
          rotate: -360,
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-20 left-10 lg:bottom-40 lg:left-40 w-20 h-20 lg:w-32 lg:h-32 border border-purple-300/15 rounded-2xl hidden md:block"
      />

      {/* Animated gradient waves */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(99, 102, 241) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(99, 102, 241) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Pulse rings */}
      <motion.div
        animate={{
          scale: [0.8, 2.5],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-indigo-400 rounded-full"
      />

      <motion.div
        animate={{
          scale: [0.8, 2.5],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.3
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-purple-400 rounded-full"
      />

      <motion.div
        animate={{
          scale: [0.8, 2.5],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2.6
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-blue-400 rounded-full"
      />

      {/* Particle sparks */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          className="absolute w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"
        />
      ))}
    </div>
  );
};

export default DynamicHeroBackground;
