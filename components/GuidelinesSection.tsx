"use client"
import { motion } from "framer-motion";
import { Guidelines } from "./data";
import { IContent } from "./types";


export function GuidelinesSection() {
  const renderItem = (
    item: IContent,
    index: number,
    isDo: boolean
  ) => {
    const themeColor = isDo ? "emerald" : "red";
    const glowClass = isDo ? "bg-emerald-500/30" : "bg-red-500/30";

    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: index * 0.1 }}
        className="relative"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
          {/* Icon */}
          <div className="relative shrink-0">
            <div className={`text-7xl sm:text-8xl md:text-9xl relative`}>
              {item.icon}
              <div className={`absolute inset-0 blur-2xl ${glowClass} rounded-full scale-150`} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <h4
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${themeColor}-500`}
              style={{ textShadow: `0 0 15px rgba(${isDo ? "52, 211, 153" : "239, 68, 68"}, 0.5)` }}
            >
              {item.title}
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        {index < (isDo ? Guidelines.dos.length : Guidelines.donts.length) - 1 && (
          <motion.div
            className={`mt-12 h-px bg-linear-to-r from-transparent via-${themeColor}-500/30 to-transparent`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-black via-zinc-950 to-purple-950/5 py-12 md:py-20 min-h-dvh">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute text-2xl md:text-4xl opacity-20"
            initial={{ x: 1000, y: -100 }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
              x: `+=${Math.sin(i) * 100}`,
              rotate: 360,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 33,
              repeat: Infinity,
              delay: 9,
              ease: "linear",
            }}
            aria-hidden="true"
          >
            {['🦇', '🕷️', '👻', '💀', '🕸️', '🍂', '🌙'][i % 7]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Do's Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20 md:mb-32 relative min-h-dvh">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-emerald-400 mb-12 md:mb-16 text-center font-['Creepster'] relative"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ textShadow: "0 0 30px rgba(68, 239, 68, 0.8)" }}
          >
            ✨ Sacred Do&apos;s ✨
          </motion.h3>

          <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square opacity-5 pointer-events-none z-0"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="200" r="180" fill="none" stroke="#10b981" strokeWidth="2" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3" />
                {[...Array(8)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 8;
                  const x = 200 + Math.cos(angle) * 180;
                  const y = 200 + Math.sin(angle) * 180;
                  return <text key={i} x={x} y={y} textAnchor="middle" fontSize="30" fill="#10b981">✨</text>;
                })}
              </svg>
            </motion.div>
            {Guidelines.dos.map((item, index) => renderItem(item, index, true))}
          </div>
        </motion.div>

        {/* Don'ts Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-red-500 mb-12 md:mb-16 text-center font-['Creepster'] relative"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ textShadow: "0 0 30px rgba(239, 68, 68, 0.8)" }}
          >
            ⚠️ Forbidden Don&apos;ts ⚠️
          </motion.h3>

          <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square opacity-5 pointer-events-none z-0"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="200" r="180" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="10,5" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
                {[...Array(8)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 8;
                  const x = 200 + Math.cos(angle) * 180;
                  const y = 200 + Math.sin(angle) * 180;
                  return <text key={i} x={x} y={y} textAnchor="middle" fontSize="30" fill="#ef4444">⚠️</text>;
                })}
              </svg>
            </motion.div>
            {Guidelines.donts.map((item, index) => renderItem(item, index, false))}
          </div>
        </motion.div>
      </div>

      {/* Decorative corner ghosts */}
      {[
        { icon: "👻", top: "top-20", left: "left-10", animateProps: { y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }, duration: 6 },
        { icon: "🕸️", top: "top-1/3", right: "right-10", animateProps: { rotate: [0, 360], scale: [1, 1.2, 1] }, duration: 20 },
        { icon: "🕯️", bottom: "bottom-40", left: "left-20", animateProps: { x: [0, 30, 0], rotate: [0, 20, 0] }, duration: 8 },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.top ?? ""} ${item.bottom ?? ""} ${item.left ?? ""} ${item.right ?? ""} text-6xl md:text-8xl opacity-15 pointer-events-none`}
          animate={item.animateProps}
          transition={{ duration: item.duration, repeat: Infinity }}
          aria-hidden="true"
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Call-to-action */}
      <div className="w-full p-12 mt-12 grid place-items-center">
        <a
          href="https://portfolio-5ge.pages.dev/"
          target="_blank"
          className="group relative inline-flex items-center gap-3 bg-purple-700/10 border border-purple-700 text-white font-semibold py-4 px-10 md:px-14 rounded-lg text-base md:text-lg transition-all duration-100 transform hover:scale-105 shadow-xl overflow-hidden cursor-pointer"
        >
          <span className="relative z-10 text-xl md:text-2xl transition-transform duration-300 group-hover:-rotate-12">🎃</span>
          <span className="relative z-10">Connect with me</span>
          <span className="relative z-10 text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-1">👻</span>
        </a>

        <div className="mt-12 text-purple-300/50 text-sm">
          <p>© 2025 All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}