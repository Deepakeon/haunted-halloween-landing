import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function CulturalSignificance() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const cards = [
    {
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'from-red-500/20',
      title: 'Community & Connection',
      description:
        'Halloween brings neighborhoods together, creating shared experiences and memories. From trick-or-treating to costume parties, it fosters a sense of belonging and community spirit.',
    },
    {
      icon: Users,
      color: 'text-purple-500',
      bgColor: 'from-purple-500/20',
      title: 'Cultural Expression',
      description:
        'The holiday allows people to explore identity, creativity, and self-expression through costumes and decorations. It provides a safe space to embrace imagination and fantasy.',
    },
    {
      icon: BookOpen,
      color: 'text-orange-500',
      bgColor: 'from-orange-500/20',
      title: 'Storytelling Tradition',
      description:
        'Halloween preserves ancient storytelling traditions, passing down folklore, legends, and cultural wisdom from generation to generation through tales of ghosts and spirits.',
    },
    {
      icon: Sparkles,
      color: 'text-yellow-500',
      bgColor: 'from-yellow-500/20',
      title: 'Celebrating Mystery',
      description:
        'In our modern world, Halloween reminds us to embrace the unknown and mysterious. It celebrates our fascination with the supernatural and allows us to confront our fears playfully.',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"
        style={{ y: backgroundY }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Why We{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Celebrate
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Beyond costumes and candy, Halloween holds deep cultural meaning
              that resonates across generations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative"
                >
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${card.bgColor} to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-12 h-12 ${card.color} mb-4`} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {card.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {card.description}
                    </p>

                    <motion.div
                      className="mt-6 h-1 bg-gradient-to-r from-orange-500 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10 border border-orange-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-16 h-16 text-yellow-400" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">
                A Universal Celebration
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {`Today, Halloween transcends borders and cultures, adapted and
                celebrated in unique ways around the world. From Mexico's Día de
                los Muertos to Ireland's traditional bonfires, the spirit of
                honoring the past while celebrating the present unites us all.`}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
