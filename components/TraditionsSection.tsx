import React, { useState } from "react";
import { motion } from "framer-motion";

const traditions = [
  {
    icon: "🎃",
    title: "Jack-o'-Lanterns",
    description:
      "Originally carved from turnips in Ireland, pumpkins became the canvas for warding off evil spirits and lighting the way for lost souls.",
  },
  {
    icon: "👻",
    title: "Costumes & Disguises",
    description:
      "Rooted in Celtic tradition, costumes were worn to confuse and hide from wandering spirits on Samhain night.",
  },
  {
    icon: "🍬",
    title: "Trick-or-Treating",
    description:
      "Evolved from 'souling' - medieval practice where poor folk would receive food in exchange for prayers for the dead.",
  },
  {
    icon: "🕯️",
    title: "Candlelight Vigils",
    description:
      "Candles placed in windows guided deceased loved ones home and kept malevolent spirits at bay.",
  },
];

const TraditionCard = ({ tradition, index, expandedIndex, onToggle }: {
  tradition: {
    icon: string,
    title: string,
    description:
    string,
  }, index: number, expandedIndex: number | null, onToggle: (index: number | null) => void
}) => {
  const isExpanded = expandedIndex === index;

  const toggle = () => {
    onToggle(isExpanded ? null : index);
  };

  return (
    <motion.div
      onClick={toggle}
      className="relative group cursor-pointer rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl bg-linear-to-b from-gray-900/60 to-black/90 aspect-square"
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
          style={{ left: `${30 + i * 20}%`, top: `${20 + i * 15}%` }}
          animate={{ y: [-5, 5, -5], x: [-3, 3, -3], opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      <div className="relative w-full h-full flex flex-col justify-center items-center">
        {/* Icon - only show if not expanded */}
        {!isExpanded && (
          <motion.div
            className="text-8xl mb-2"
          >
            {tradition.icon}
          </motion.div>
        )}

        {/* CTA - only show if not expanded */}
        {!isExpanded && (
          <motion.div
            className="flex flex-col items-center justify-center mt-4"
          >
            <div className="text-orange-400">
              {tradition.title}
            </div>
            <button
              className="mt-3 px-3 py-1.5 bg-black/70 border border-orange-500/50 text-orange-400 text-sm rounded-full backdrop-blur-sm shadow-lg select-none z-10"

            >

              👻 Click me
            </button>
          </motion.div>
        )}

        {/* Expanded content overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 20,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Keep content in DOM always but animate out smoothly */}
          <h3
            className="text-lg md:text-xl font-bold text-orange-400 drop-shadow-lg"
            style={{
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            {tradition.title}
          </h3>
          <p
            className="text-sm md:text-base text-gray-300 leading-relaxed max-w-[90%]"
            style={{
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            {tradition.description}
          </p>
        </motion.div>

      </div>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none duration-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,107,53,0.4), rgba(255,170,0,0.2) 10%, transparent 70%)",
          boxShadow: "0 0 60px rgba(255,107,53,0.4), inset 0 0 40px rgba(255,170,0,0.1)",
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export function TraditionsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-black overflow-hidden min-h-dvh">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-orange-500 mb-6">
            Sacred Traditions
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Time-honored customs that have shaped Halloween into the beloved celebration we know today
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-12">
          {traditions.map((tradition, index) => (
            <TraditionCard
              key={tradition.title}
              tradition={tradition}
              index={index}
              expandedIndex={expandedIndex}
              onToggle={setExpandedIndex}
            />
          ))}
        </div>
      </div>

      {/* Floating glows */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
}
