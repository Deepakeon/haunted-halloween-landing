"use client"
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

const timeline = [
  {
    era: "2000 BCE",
    icon: "🔥",
    title: "Celtic Samhain",
    description: "Ancient Celts celebrate Samhain, marking the end of harvest and beginning of winter."
  },
  {
    era: "800s CE",
    icon: "⛪",
    title: "All Hallows' Eve",
    description: "Christianity transforms Samhain into All Hallows' Eve, merging pagan and Christian traditions."
  },
  {
    era: "1800s",
    icon: "🎃",
    title: "American Halloween",
    description: "Irish immigrants bring Halloween traditions to America, popularizing jack-o'-lanterns and trick-or-treating."
  }
];

const HexagonTimeline = ({ event, index }: {event: {
    era: string,
    icon: string,
    title: string,
    description: string
  }, index: number}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 50,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={controls}
      initial="hidden"
      className="relative mb-16 md:mb-32 group"
    >
      <div className="flex flex-col items-center gap-8 md:gap-16">
        {/* Hexagon Container */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <filter id={`hex-glow-${index}`}>
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id={`hex-gradient-${index}`}>
                <stop offset="0%" stopColor="rgb(234, 88, 12)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(234, 88, 12)" stopOpacity="0.03" />
              </radialGradient>
            </defs>

            {/* Outer glow circle */}
            <motion.circle
              cx="100"
              cy="100"
              r="85"
              fill={`url(#hex-gradient-${index})`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
              }}
              className="group-hover:opacity-100 transition-opacity duration-500"
              filter={`url(#hex-glow-${index})`}
            />

            {/* Hexagon path */}
            <motion.path
              d="M 100 20 L 170 60 L 170 140 L 100 180 L 30 140 L 30 60 Z"
              fill="rgba(20, 20, 20, 0.8)"
              stroke="rgb(234, 88, 12)"
              strokeWidth="3"
              strokeDasharray="0 1"
              filter={`url(#hex-glow-${index})`}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.2, ease: "easeInOut" },
                },
              }}
            />

            {/* Inner decorative hexagon */}
            <motion.path
              d="M 100 40 L 155 70 L 155 130 L 100 160 L 45 130 L 45 70 Z"
              fill="none"
              stroke="rgb(234, 88, 12)"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="0 1"
              variants={{
                hidden: { pathLength: 0 },
                visible: {
                  pathLength: 1,
                  transition: { delay: 0.3, duration: 1.2, ease: "easeInOut" },
                },
              }}
            />

            {/* Corner dots */}
            {[
              { cx: 100, cy: 20 },
              { cx: 170, cy: 60 },
              { cx: 170, cy: 140 },
              { cx: 100, cy: 180 },
              { cx: 30, cy: 140 },
              { cx: 30, cy: 60 },
            ].map((pos, i) => (
              <motion.circle
                key={i}
                cx={pos.cx}
                cy={pos.cy}
                r="4"
                fill="rgb(234, 88, 12)"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 },
                  },
                }}
              />
            ))}
          </svg>

          {/* Content inside hexagon */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
            }}
          >
            <motion.div
              className="text-6xl md:text-7xl mb-4"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {event.icon}
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 tracking-wider">
              {event.era}
            </h3>
          </motion.div>

          {/* Floating particles around hex */}
          <motion.div
            className="absolute -top-6 -left-6 text-3xl opacity-40"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -right-6 text-3xl opacity-40"
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2.5,
              ease: "easeInOut",
            }}
          >
            🌙
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="flex-1 text-center md:text-left max-w-md"
          variants={{
            hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h4 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400 text-center">
            {event.title}
          </h4>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            {event.description}
          </p>
        </motion.div>
      </div>

      {/* Connecting line to next hex */}
      {index < timeline.length - 1 && (
        <motion.div
          className="hidden md:block absolute left-1/2 -bottom-16 w-0.5 h-16 bg-linear-to-b from-orange-500 to-transparent -translate-x-1/2"
          variants={{
            hidden: { scaleY: 0, opacity: 0 },
            visible: {
              scaleY: 1,
              opacity: 1,
              transition: { delay: 0.5, duration: 0.6 },
            },
          }}
        />
      )}
    </motion.div>
  );
};


export function OriginsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 }); // triggers when 30% of section is visible
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="relative min-h-screen py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 md:mb-32"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Ancient Origins
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl text-orange-300 mb-4 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            The Celtic Festival of Samhain
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Journey through 4,000 years of mystical transformation, from sacred Celtic bonfires to modern trick-or-treating
          </motion.p>
        </motion.div>

        {/* Timeline with hex animations */}
        <div className="relative py-12">
          {timeline.map((event, index) => (
            <HexagonTimeline
              key={event.era}
              event={event}
              index={index}
            />
          ))}
        </div>  
      </div>

      {/* Ambient floating particles - reduced to 6 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl"
            initial={{ y: "100vh", x: `${0.5 * 100}vw` }}
            animate={{
              y: "-20vh",
              x: `${0.6 * 100}vw`,
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          >
            {["🍂", "🍁", "🕯️", "⭐", "🌙", "✨"][i]}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
