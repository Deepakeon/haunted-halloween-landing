import { motion, useScroll, useTransform } from 'framer-motion';
import { Candy, Shirt, Home, Ghost, Apple, Skull } from 'lucide-react';
import { useRef } from 'react';

export default function Traditions() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const traditions = [
    {
      icon: Candy,
      title: 'Trick-or-Treating',
      description:
        'Children dress in costumes and go door-to-door collecting candy, a tradition that evolved from medieval "souling" where poor people would visit houses and receive food in exchange for prayers.',
      color: 'text-pink-500',
      gradient: 'from-pink-500/20 to-purple-500/20',
    },
    {
      icon: Shirt,
      title: 'Costumes',
      description:
        'Dressing up in disguises dates back to Celtic times when people wore animal skins to confuse spirits. Today, costumes range from scary to creative to humorous.',
      color: 'text-purple-500',
      gradient: 'from-purple-500/20 to-orange-500/20',
    },
    {
      icon: Home,
      title: 'Decorations',
      description:
        'Homes are adorned with jack-o-lanterns, cobwebs, and spooky displays. Carved pumpkins originated from Irish tradition of carving turnips to ward off evil spirits.',
      color: 'text-orange-500',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Ghost,
      title: 'Ghost Stories',
      description:
        'Gathering to share spooky tales is a timeless tradition that connects us to our ancestors who told stories around bonfires on Samhain night.',
      color: 'text-blue-400',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Apple,
      title: 'Apple Bobbing',
      description:
        'This game comes from Roman harvest festivals honoring Pomona, goddess of fruits. The first person to bite an apple was believed to be next to marry.',
      color: 'text-red-500',
      gradient: 'from-red-500/20 to-yellow-500/20',
    },
    {
      icon: Skull,
      title: 'Haunted Houses',
      description:
        'Modern haunted attractions provide thrilling entertainment, allowing people to safely confront fears in a controlled environment while building community bonds.',
      color: 'text-gray-400',
      gradient: 'from-gray-500/20 to-orange-500/20',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />

      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['-50px', '50px']) }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Ghost className="w-20 h-20 text-orange-500 mx-auto" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Beloved{' '}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-transparent bg-clip-text">
                Traditions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Time-honored customs that make Halloween the enchanting celebration
              we know and love
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => {
              const Icon = tradition.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-br ${tradition.gradient} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full flex flex-col">
                    <motion.div
                      className="mb-4"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-12 h-12 ${tradition.color}`} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {tradition.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed flex-grow">
                      {tradition.description}
                    </p>

                    <motion.div
                      className={`mt-4 h-1 bg-gradient-to-r ${tradition.gradient}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-orange-500/30 rounded-2xl p-10 max-w-4xl mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-pink-500/5"
                animate={{
                  x: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block mb-4"
                >
                  <Candy className="w-16 h-16 text-pink-500" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Creating New Memories
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  While we honor ancient traditions, Halloween continues to evolve
                  with each generation, adding new customs and creating fresh
                  memories while maintaining the spirit of community, creativity,
                  and connection.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
