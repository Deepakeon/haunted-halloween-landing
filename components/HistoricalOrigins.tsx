import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, TreePine, Moon, Skull } from 'lucide-react';
import { useRef } from 'react';

export default function HistoricalOrigins() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/20 to-black" />

      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['-100px', '100px']) }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div style={{ opacity, scale }}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Flame className="w-12 h-12 text-orange-500" />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold text-white">
                Ancient Origins
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-lg blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-lg p-8">
                  <TreePine className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    The Celtic Festival of Samhain
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Over 2,000 years ago, the ancient Celts celebrated Samhain,
                    marking the end of harvest and the beginning of winter. They
                    believed that on the night of October 31st, the boundary
                    between the worlds of the living and the dead became blurred,
                    allowing spirits to walk among them.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border border-orange-500/20 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <Moon className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Sacred Bonfires
                    </h4>
                    <p className="text-gray-400">
                      Celtic priests lit massive bonfires where people gathered
                      to burn crops and animals as sacrifices to their deities,
                      seeking protection during the dark winter months.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border border-orange-500/20 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <Skull className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Honoring the Dead
                    </h4>
                    <p className="text-gray-400">
                      Families left food and drink outside their homes to
                      appease wandering spirits. They wore costumes made of
                      animal skins to disguise themselves from harmful entities.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border border-orange-500/20 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <Flame className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Christian Influence
                    </h4>
                    <p className="text-gray-400">
                     {` In the 8th century, Pope Gregory III designated November
                      1st as All Saints' Day, incorporating Samhain traditions.
                      The evening before became All Hallows' Eve, eventually
                      shortened to Halloween.`}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
