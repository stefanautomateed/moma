'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';

const words = [
  "balans",
  "mir",
  "sklad",
  "harmoniju",
  "ravnotežu",
  "spokojstvo"
];

interface FloatingElementProps {
  delay?: number;
  className?: string;
  children: ReactNode;
}

// Floating elements za pozadinu
const FloatingElement = ({ delay = 0, className = "", children }: FloatingElementProps) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 0.95, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-right gradient circle */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl dark:from-blue-400/10 dark:to-purple-400/10" />
        
        {/* Bottom-left gradient circle */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/30 to-emerald-400/30 rounded-full blur-3xl dark:from-blue-400/10 dark:to-emerald-400/10" />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-px h-screen bg-gradient-to-b from-blue-200/0 via-blue-200/50 to-blue-200/0 dark:from-blue-400/0 dark:via-blue-400/20 dark:to-blue-400/0 transform -rotate-45" />
        <div className="absolute top-0 right-1/4 w-px h-screen bg-gradient-to-b from-blue-200/0 via-blue-200/30 to-blue-200/0 dark:from-blue-400/0 dark:via-blue-400/10 dark:to-blue-400/0 transform rotate-45" />
        
        {/* Horizontal lines */}
        <div className="absolute top-1/3 left-0 w-screen h-px bg-gradient-to-r from-blue-200/0 via-blue-200/50 to-blue-200/0 dark:from-blue-400/0 dark:via-blue-400/20 dark:to-blue-400/0" />
        <div className="absolute bottom-1/3 left-0 w-screen h-px bg-gradient-to-r from-blue-200/0 via-blue-200/30 to-blue-200/0 dark:from-blue-400/0 dark:via-blue-400/10 dark:to-blue-400/0" />

        {/* Floating elements */}
        <FloatingElement className="top-1/4 left-1/4" delay={0}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-400/5 dark:to-purple-400/5 backdrop-blur-sm" />
        </FloatingElement>
        <FloatingElement className="bottom-1/4 right-1/4" delay={1}>
          <div className="w-20 h-20 rounded-lg bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 dark:from-blue-400/5 dark:to-emerald-400/5 backdrop-blur-sm transform rotate-45" />
        </FloatingElement>
        <FloatingElement className="top-1/3 right-1/3" delay={2}>
          <div className="w-12 h-12 rounded-full ring-2 ring-blue-400/20 dark:ring-blue-400/10 backdrop-blur-sm" />
        </FloatingElement>
        <FloatingElement className="bottom-1/3 left-1/3" delay={3}>
          <div className="w-14 h-14 rounded-lg ring-2 ring-purple-400/20 dark:ring-purple-400/10 backdrop-blur-sm transform -rotate-12" />
        </FloatingElement>

        {/* Dots pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1rem 1rem, rgba(96, 165, 250, 0.1) 0.25rem, transparent 0.25rem)`,
          backgroundSize: '3rem 3rem',
          opacity: 0.5
        }} />
      </div>

      <AnimatePresence>
        {isMounted && (
          <motion.div
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4">
                <span>Razumeti sebe,</span>
                <div className="flex items-center gap-x-3">
                  <span>pronaći</span>
                  <div className="relative inline-block w-[200px] sm:w-[250px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={words[wordIndex]}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300"
                      >
                        {words[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                    <span className="invisible whitespace-nowrap">{words[0]}</span>
                  </div>
                </div>
              </div>
            </motion.h1>

            <motion.p
              variants={item}
              className="relative max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-16"
            >
              <span className="relative">
                Profesionalna terapija za lični razvoj i unapređenje komunikacije
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent dark:via-blue-400/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </span>
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium text-lg overflow-hidden shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Zakaži konsultaciju</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>

              <motion.a
                href="#about"
                className="group relative px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium text-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Saznaj više</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={item}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-gray-400/50 dark:border-gray-600/50 rounded-full p-1 backdrop-blur-sm">
                <motion.div
                  className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 