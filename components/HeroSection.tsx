"use client"
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(/hero-halloween.jpg)` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/30 to-background" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-20"
            initial={{ y: "100vh", x: `${0.9 * 100}vw`, rotate: 0 }}
            animate={{
              y: "-100vh",
              x: `${0.5 * 100}vw`,
              rotate: 360,
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          >
            🦇
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-7xl md:text-9xl font-bold mb-6 font-['Creepster'] text-primary drop-shadow-[0_0_30px_rgba(255,107,53,0.5)]"
          style={{ textShadow: "0 0 40px rgba(255,107,53,0.6)" }}
        >
          Halloween
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-4xl mb-8 text-foreground/90 font-medium"
        >
          An Immersive Journey Through Time
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          {`Discover the ancient origins and modern traditions of the world's most
          enchanting celebration`}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="animate-float"
        >
          <svg
            className="w-12 h-12 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
    </section>
  );
};
