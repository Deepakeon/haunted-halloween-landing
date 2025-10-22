import { motion, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  Heart,
  Shield,
  Users,
  Lightbulb,
} from 'lucide-react';
import { useRef } from 'react';

export default function DosAndDonts() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const dos = [
    {
      icon: Heart,
      title: 'Respect Cultural Traditions',
      description:
        'Honor the diverse origins and meanings of Halloween across different cultures. Recognize its sacred roots and contemporary significance.',
    },
    {
      icon: Shield,
      title: 'Prioritize Safety',
      description:
        'Ensure costumes are visible at night, check candy before eating, travel in groups, and stay in well-lit areas. Adult supervision for young children is essential.',
    },
    {
      icon: Users,
      title: 'Be Inclusive',
      description:
        'Choose costumes thoughtfully, avoiding cultural appropriation or stereotypes. Make celebrations accessible to everyone in your community.',
    },
    {
      icon: Lightbulb,
      title: 'Be Considerate',
      description:
        'Respect neighbors who may not celebrate, keep noise levels reasonable, and be mindful of those with allergies by offering non-food treats.',
    },
  ];

  const donts = [
    {
      title: 'Cultural Appropriation',
      description:
        "Avoid costumes that mock or trivialize other cultures, religions, or marginalized groups. Don't turn someone's heritage into a costume.",
    },
    {
      title: 'Dangerous Props',
      description:
        "Don't carry realistic weapons or sharp objects. Opt for soft, clearly fake props that won't cause harm or alarm.",
    },
    {
      title: 'Trespassing',
      description:
        "Respect private property and 'No Soliciting' signs. Only visit homes with porch lights on, signaling they're participating.",
    },
    {
      title: 'Excessive Pranks',
      description:
        "Harmless fun is great, but don't vandalize property, cause harm, or create distress. Keep 'tricks' lighthearted and reversible.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
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
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Celebrating{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Responsibly
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Guidelines for a safe, respectful, and enjoyable Halloween
              experience for everyone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-24">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                  <h3 className="text-4xl font-bold text-white">{`Do's`}</h3>
                </motion.div>

                <div className="space-y-6">
                  {dos.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.03,
                          x: 10,
                          transition: { duration: 0.2 },
                        }}
                        className="group relative"
                      >
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
                          <div className="flex items-start gap-4">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                            </motion.div>
                            <div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                {item.title}
                              </h4>
                              <p className="text-gray-400 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-24">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <XCircle className="w-12 h-12 text-red-500" />
                  <h3 className="text-4xl font-bold text-white">{`Don'ts`}</h3>
                </motion.div>

                <div className="space-y-6">
                  {donts.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.03,
                        x: -10,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative"
                    >
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <XCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                          </motion.div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-10 max-w-4xl mx-auto text-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
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
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block mb-4"
                >
                  <Shield className="w-16 h-16 text-blue-400 mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Remember: Have Fun, Stay Safe
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {`Halloween is about joy, creativity, and community. By following
                  these guidelines, we ensure that everyone can participate in the
                  magic while feeling safe, respected, and included. Let's create
                  positive memories together.`}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
