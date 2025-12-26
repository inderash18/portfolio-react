import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../config/portfolio';

const Home = ({ onBack }) => {
  const [scanLine, setScanLine] = useState(0);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 50);

    setTimeout(() => {
      setIsScanning(false);
      clearInterval(interval);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const titleLetters = "SYSTEM ONLINE".split("");

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Scanning Effect */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 glass-container rounded-full mb-12 border border-cyan-400/30"
        >
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 font-mono text-sm tracking-wider">NEURAL LINK ESTABLISHED</span>
        </motion.div>

        {/* Animated Title */}
        <div className="mb-12">
          {titleLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 1 + index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="inline-block text-6xl md:text-8xl font-black text-white glow-cyan mr-2"
              style={{
                textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff',
                transformStyle: 'preserve-3d'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Profile Scan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="glass-card-refined p-8 max-w-2xl mx-auto mb-12"
        >
          <div className="text-left space-y-4">
            <div className="flex justify-between items-center border-b border-cyan-400/20 pb-2">
              <span className="text-cyan-400 font-mono text-sm">IDENTITY:</span>
              <span className="text-white font-semibold">{personalInfo.name}</span>
            </div>
            <div className="flex justify-between items-center border-b border-cyan-400/20 pb-2">
              <span className="text-cyan-400 font-mono text-sm">ROLE:</span>
              <span className="text-white">{personalInfo.role}</span>
            </div>
            <div className="flex justify-between items-center border-b border-cyan-400/20 pb-2">
              <span className="text-cyan-400 font-mono text-sm">STATUS:</span>
              <span className="text-green-400 font-mono">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cyan-400 font-mono text-sm">SPECIALTY:</span>
              <span className="text-white">{personalInfo.specialty}</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            onClick={() => onBack && onBack('projects')}
            className="btn-glass px-8 py-4 glow-cyan text-cyan-400 font-mono hover:scale-105 transition-transform"
          >
            ACCESS PROJECTS
          </button>
          <button
            onClick={() => onBack && onBack('about')}
            className="btn-glass px-8 py-4 glow-purple text-purple-400 font-mono hover:scale-105 transition-transform"
          >
            VIEW PROFILE
          </button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
