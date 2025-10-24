"use client"
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants, animationControls, MotionNodeAnimationOptions, HTMLMotionProps } from 'framer-motion';
import { TimeLine } from './data';
import { ITimeline } from './types';

const FloatingParticle = ({ emoji, top, left, animateY, animateRotate, delay = 0 }: { emoji: string; top?: string; left?: string; animateY: number[]; animateRotate: number[]; delay?: number }) => (
  <motion.div
    className="absolute text-3xl opacity-40"
    style={{ top, left }}
    animate={{
      y: animateY,
      rotate: animateRotate,
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    {emoji}
  </motion.div>
);

const HexagonGlow = ({ index, cornerDotPositions }: { index: number; cornerDotPositions: { cx: number; cy: number }[] }) => (
  <svg viewBox="0 0 200 200" className="w-full h-full" role="img" aria-label="Hexagon decorative element">
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
      className="group-hover:opacity-100 transition-opacity duration-500"
      filter={`url(#hex-glow-${index})`}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
      }}
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
        visible: { pathLength: 1, transition: { delay: 0.3, duration: 1.2, ease: "easeInOut" } },
      }}
    />

    {/* Corner dots */}
    {cornerDotPositions.map((pos, i) => (
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
);

interface HexagonTimelineProps {
  event: ITimeline;
  index: number;
}
const HexagonTimeline: React.FC<HexagonTimelineProps> = ({ event, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
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
  }, cornerDotPositions = [
    { cx: 100, cy: 20 },
    { cx: 170, cy: 60 },
    { cx: 170, cy: 140 },
    { cx: 100, cy: 180 },
    { cx: 30, cy: 140 },
    { cx: 30, cy: 60 },
  ]

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
          <HexagonGlow index={index} cornerDotPositions={cornerDotPositions} />

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
              aria-hidden="true"
            >
              {event.icon}
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 tracking-wider">{event.era}</h3>
          </motion.div>

          {/* Floating particles */}
          <FloatingParticle emoji="✨" top="-1.5rem" left="-1.5rem" animateY={[-10, 10, -10]} animateRotate={[0, 5, 0]} />
          <FloatingParticle emoji="🌙" top="auto" left="auto" animateY={[10, -10, 10]} animateRotate={[0, -5, 0]} delay={2.5} />
        </motion.div>

        {/* Text content */}
        <motion.div
          className="flex-1 text-center md:text-left max-w-md"
          variants={{
            hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.8, ease: "easeOut" } },
          }}
        >
          <h4 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400 text-center">{event.title}</h4>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">{event.description}</p>
        </motion.div>
      </div>

      {/* Connecting line */}
      {index < TimeLine.length - 1 && (
        <motion.div
          className="hidden md:block absolute left-1/2 -bottom-16 w-0.5 h-16 bg-linear-to-b from-orange-500 to-transparent -translate-x-1/2"
          variants={{
            hidden: { scaleY: 0, opacity: 0 },
            visible: { scaleY: 1, opacity: 1, transition: { delay: 0.5, duration: 0.6 } },
          }}
        />
      )}
    </motion.div>
  );
};

interface AnimatedTextProps {
  tag?: "h2" | "h3" | "h4" | "p";
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
const AnimatedText: React.FC<AnimatedTextProps> = ({ tag = "p", children, className, delay = 0 }) => {
  const motionProps: HTMLMotionProps<"div"> = {
    className: className,
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] }
  }

  const motionTagObj = {
    "h2": <motion.h2
      {...motionProps}
      initial={{ opacity: 0, y: -50 }}
    >
      {children}
    </motion.h2>,
    "h3": <motion.h3
      {...motionProps}
    >
      {children}
    </motion.h3>,
    "h4": <motion.h4
      {...motionProps}
    >
      {children}
    </motion.h4>,
    "p": <motion.p
      {...motionProps}
    >
      {children}
    </motion.p>
  }

  return motionTagObj[tag]
};

interface AmbientParticleProps {
  emoji: string;
  initialX?: string;
  initialY?: string;
  rotateRange?: [number, number];
  duration?: number;
  delay?: number;
}
const AmbientParticle: React.FC<AmbientParticleProps> = ({
  emoji,
  initialX = "50vw",
  initialY = "100vh",
  rotateRange = [0, 360],
  duration = 20,
  delay = 0,
}) => (
  <motion.div
    className="absolute text-3xl md:text-4xl opacity-20"
    initial={{ x: initialX, y: initialY }}
    animate={{ y: "-20vh", x: "60vw", rotate: rotateRange }}
    transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
    aria-hidden="true"
  >
    {emoji}
  </motion.div>
);

export const OriginsSection = () => {
  const ambientFloatingParticles = ["✨", "🌙", "🕯️", "🦇"]
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation()
  const inView = useInView(sectionRef, { amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [inView, controls]);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 md:mb-32"
        >
          <AnimatedText tag="h2" className="text-5xl md:text-7xl font-bold text-orange-500 mb-6">
            Ancient Origins
          </AnimatedText>
          <AnimatedText tag="p" className="text-2xl md:text-3xl text-orange-300 mb-4 font-light" delay={0.2}>
            The Celtic Festival of Samhain
          </AnimatedText>
          <AnimatedText tag="p" className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto" delay={0.4}>
            Journey through 4,000 years of mystical transformation, from sacred Celtic bonfires to modern trick-or-treating
          </AnimatedText>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative py-12">
          {TimeLine.map((event, index) => (
            <HexagonTimeline key={event.era} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Ambient floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ambientFloatingParticles.slice(0, 4).map((emoji, i) => (
          <AmbientParticle
            key={i}
            emoji={emoji}
            duration={20 + i * 3}
            delay={i * 2}
            initialX={`${0.5 * 100}vw`}
            initialY="100vh"
          />
        ))}
      </div>
    </section>
  )
};