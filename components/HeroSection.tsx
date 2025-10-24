"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const BAT_COUNT = 6;

export const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Halloween themed hero section"
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="hero-halloween.jpg"
          alt="halloween"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(BAT_COUNT)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-20"
            initial={prefersReducedMotion ? {} : { y: "100vh", rotate: 0 }}
            animate={
              prefersReducedMotion
                ? {}
                : { y: "-100vh", rotate: 360, x: `${20 + i * 10}vw` }
            }
            transition={
              prefersReducedMotion
                ? {}
                : {
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear",
                }
            }
            aria-hidden="true"
          >
            🦇
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          ref={headingRef}
          tabIndex={-1}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 font-['Creepster'] text-primary drop-shadow-[0_0_30px_rgba(255,107,53,0.5)] focus:outline-none"
          style={{ textShadow: "0 0 40px rgba(255,107,53,0.6)" }}
        >
          Halloween
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-4xl mb-8 text-foreground/90 font-medium"
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
          className="animate-bounce"
        >
          <svg
            className="w-12 h-12 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-label="Scroll down"
            role="img"
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
    </section>
  );
};
