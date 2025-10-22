"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Ghost } from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingParticles from '@/components/FloatingParticles';
import Hero from '@/components/Hero';
import HistoricalOrigins from '@/components/HistoricalOrigins';
import CulturalSignificance from '@/components/CulturalSignificance';
import Traditions from '@/components/Traditions';
import DosAndDonts from '@/components/DosAndDonts';
import ModernCelebration from '@/components/ModernCelebration';

function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div ref={containerRef} className="relative bg-black overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <FloatingParticles />

      <Hero />
      <HistoricalOrigins />
      <CulturalSignificance />
      <Traditions />
      <DosAndDonts />
      <ModernCelebration />

      <footer className="relative bg-gradient-to-b from-black to-gray-900 py-16 border-t border-orange-500/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Ghost className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <p className="text-gray-400 text-sm">
              An immersive journey through Halloween history
            </p>
            <p className="text-gray-600 text-xs mt-2">
              2025 - Crafted with care and creativity
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
