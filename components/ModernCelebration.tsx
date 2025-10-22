import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Sparkles, TrendingUp, Heart, Calendar, Users } from 'lucide-react';
import { useRef } from 'react';

export default function ModernCelebration() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  const globalCelebrations = [
    {
      country: 'Mexico',
      celebration: 'Día de los Muertos',
      description:
        'A vibrant celebration honoring deceased loved ones with colorful altars, marigolds, sugar skulls, and favorite foods of the departed.',
      icon: '🇲🇽',
    },
    {
      country: 'Ireland',
      celebration: 'Samhain Revival',
      description:
        'The birthplace of Halloween keeps ancient traditions alive with bonfires, storytelling, and community gatherings celebrating Celtic heritage.',
      icon: '🇮🇪',
    },
    {
      country: 'Japan',
      celebration: 'Kawaii Halloween',
      description:
        'A fusion of Western Halloween with Japanese pop culture, featuring cute costumes, themed cafes, and massive street parties in Tokyo.',
      icon: '🇯🇵',
    },
    {
      country: 'Philippines',
      celebration: 'Pangangaluluwa',
      description:
        'Children go door-to-door singing songs for souls in purgatory, receiving treats and money in exchange for their prayers.',
      icon: '🇵🇭',
    },
    {
      country: 'Austria',
      celebration: 'Seleenwoche',
      description:
        'Soul Weeks feature leaving bread, water, and a lit lamp on tables before bed to welcome dead souls back home.',
      icon: '🇦🇹',
    },
    {
      country: 'United States',
      celebration: 'Commercial Halloween',
      description:
        'The second-largest commercial holiday features elaborate decorations, haunted attractions, costume parties, and massive candy sales.',
      icon: '🇺🇸',
    },
  ];

  const modernTrends = [
    {
      icon: TrendingUp,
      title: 'Social Media Integration',
      description:
        'Instagram-worthy costumes, TikTok challenges, and virtual costume contests have transformed how we share Halloween experiences.',
      color: 'text-pink-500',
    },
    {
      icon: Heart,
      title: 'Year-Round Enthusiasm',
      description:
        'Halloween has evolved beyond October, with year-round stores, events, and a dedicated community of enthusiasts keeping the spirit alive.',
      color: 'text-red-500',
    },
    {
      icon: Calendar,
      title: 'Extended Celebrations',
      description:
        'From Halloweekend parties to month-long festivities, the holiday has expanded into a full season of spooky celebration.',
      color: 'text-orange-500',
    },
    {
      icon: Users,
      title: 'Adult Participation',
      description:
        "No longer just for kids, adults embrace Halloween with themed parties, elaborate costumes, and creative home decorations.",
      color: 'text-purple-500',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />

      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div style={{ opacity, scale }}>
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
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Globe className="w-20 h-20 text-blue-500 mx-auto" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Halloween{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Today
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A global phenomenon celebrated in unique and creative ways across
              cultures
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              Around the World
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalCelebrations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 h-full">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.country}
                    </h4>
                    <p className="text-purple-400 font-semibold mb-3">
                      {item.celebration}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              Modern Trends
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {modernTrends.map((trend, index) => {
                const Icon = trend.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative"
                  >
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                      >
                        <Icon className={`w-12 h-12 ${trend.color}`} />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        {trend.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {trend.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-orange-900/50 border border-purple-500/30 rounded-2xl p-12 text-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(139,92,246,0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-20 h-20 text-yellow-400 mx-auto" />
                </motion.div>

                <h3 className="text-4xl font-bold text-white mb-6">
                  The Magic Continues
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                  From ancient Celtic bonfires to modern social media celebrations,
                  Halloween has transcended time and borders. It remains a powerful
                  force for community, creativity, and connection—a night when we
                  honor our past, celebrate our present, and embrace the mystery
                  of what lies beyond.
                </p>

                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold text-lg"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-6 h-6" />
                  <span>Happy Halloween</span>
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
