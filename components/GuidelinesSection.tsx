"use client"
import { motion } from "framer-motion";

const guidelines = {
  dos: [
    {
      title: "Respect Cultural Origins",
      description:
        "Honor the Celtic and Mexican traditions that influenced Halloween and Día de los Muertos.",
      icon: "✨",
    },
    {
      title: "Be Mindful of Costumes",
      description:
        "Avoid cultural appropriation by steering clear of costumes that mock or stereotype cultures, religions, or races.",
      icon: "🎭",
    },
    {
      title: "Practice Safety First",
      description:
        "Use flame-resistant decorations, inspect candy, travel in groups, and ensure visibility with reflective gear.",
      icon: "🛡️",
    },
    {
      title: "Support Local Communities",
      description:
        "Shop from small businesses, participate in neighborhood events, and contribute to community celebrations.",
      icon: "🏘️",
    },
  ],
  donts: [
    {
      title: "Don't Cultural Appropriate",
      description:
        "Avoid wearing sacred symbols, traditional dress, or cultural items as costume accessories without understanding their significance.",
      icon: "⚠️",
    },
    {
      title: "Don't Overwhelm Young Children",
      description:
        "Keep decorations age-appropriate; extreme gore or horror themes can traumatize young trick-or-treaters.",
      icon: "👶",
    },
    {
      title: "Don't Forget Allergies",
      description:
        "Offer non-food treats like stickers or toys for children with food allergies (look for teal pumpkin signs).",
      icon: "🎃",
    },
    {
      title: "Don't Vandalize or Trespass",
      description:
        "Halloween pranks should never involve property damage, trespassing, or actions that harm others.",
      icon: "🚫",
    },
  ],
};

export function GuidelinesSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-black via-zinc-950 to-purple-950/5  py-12 md:py-20 min-h-dvh">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute text-2xl md:text-4xl opacity-20"
            initial={{
              x: 1000,
              y: -100,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              x: `+=${Math.sin(i) * 100}`,
              rotate: 360,
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 0.9 * 20 + 15,
              repeat: Infinity,
              delay: 0.9 * 10,
              ease: "linear"
            }}
          >
            {['🦇', '🕷️', '👻', '💀', '🕸️', '🍂', '🌙'][i % 7]}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-10 text-7xl opacity-10 pointer-events-none"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          🕸️
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-indigo-900/30 via-indigo-900/10 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Do's Section - Mystical Green Theme */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 relative min-h-dvh"
        >
          {/* Magical Circle Background */}
          <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 200,
            repeat: Infinity,
          }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square opacity-5 pointer-events-none">
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

          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-emerald-400 mb-12 md:mb-16 text-center font-['Creepster'] relative"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ textShadow: '0 0 30px rgba(68, 239, 68, 0.8)' }}
          >
            <span className="relative inline-block">
              ✨ Sacred Do&apos;s ✨
            </span>
          </motion.h3>

          <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
            {guidelines.dos.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="relative"
              >

                <motion.div
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left"
                >
                  {/* Large Floating Icon */}
                  <motion.div
                    className="relative shrink-0"
                  >
                    <div className="text-7xl sm:text-8xl md:text-9xl relative">
                      {item.icon}
                      {/* Magical glow around icon */}
                      <div className="absolute inset-0 blur-2xl bg-emerald-500/30 rounded-full scale-150" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <motion.h4
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400"
                      style={{ textShadow: '0 0 15px rgba(52, 211, 153, 0.5)' }}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p
                      className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  </div>

                </motion.div>

                {/* Subtle divider */}
                {index < guidelines.dos.length - 1 && (
                  <motion.div
                    className="mt-12 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Don'ts Section - Dark Red Theme */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Ominous Circle Background */}
          <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 200,
            repeat: Infinity,
          }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square opacity-5 pointer-events-none">
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

          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-red-500 mb-12 md:mb-16 text-center font-['Creepster'] relative"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ textShadow: '0 0 30px rgba(239, 68, 68, 0.8)' }}
          >
            <span className="relative inline-block">
              ⚠️ Forbidden Don&apos;ts ⚠️

            </span>
          </motion.h3>

          <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
            {guidelines.donts.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="relative"
              >

                <motion.div
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left"
                >
                  {/* Large Icon with Warning Pulse */}
                  <motion.div
                    className="relative shrink-0"
                  >
                    <div className="text-7xl sm:text-8xl md:text-9xl relative">
                      {item.icon}
                      {/* Warning glow */}
                      <div className="absolute inset-0 blur-2xl bg-red-500/30 rounded-full scale-150" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <motion.h4
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500"
                      style={{ textShadow: '0 0 15px rgba(239, 68, 68, 0.5)' }}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p
                      className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
                {/* Subtle divider */}
                {index < guidelines.donts.length - 1 && (
                  <motion.div
                    className="mt-12 h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corner Ghost Decorations */}
      <motion.div
        className="absolute top-20 left-10 text-6xl md:text-8xl opacity-15 pointer-events-none"
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        👻
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-10 text-5xl md:text-7xl opacity-10 pointer-events-none"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        🕸️
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-6xl md:text-8xl opacity-15 pointer-events-none"
        animate={{
          x: [0, 30, 0],
          rotate: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🕯️
      </motion.div>
      <motion.div className="w-full p-12 mt-12 grid place-items-center">
      <button
        className="group relative inline-flex items-center gap-3 bg-purple-700/10 border border-purple-700 text-white font-semibold py-4 px-10 md:px-14 rounded-lg text-base md:text-lg transition-all duration-100 transform hover:scale-105 shadow-xl overflow-hidden cursor-pointer"
      >
        
        <span className="relative z-10 text-xl md:text-2xl transition-transform duration-300 group-hover:-rotate-12">
          🎃
        </span>
        <span className="relative z-10">Connect with me</span>
        <span className="relative z-10 text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-1">
          👻
        </span>
        
      </button>

      {/* Simple copyright */}
      <div className="mt-12 text-purple-300/50 text-sm">
        <p>© 2025 All Rights Reserved</p>
      </div>
      </motion.div>
    </section>
  );
}