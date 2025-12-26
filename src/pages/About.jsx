import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bio, lifecycle, skills } from '../config/portfolio';
import { Cpu, Database, Code, Zap } from 'lucide-react';

const DataStream = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="font-mono text-green-400 text-sm"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

const SkillNode = ({ skill, index }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 2000 + index * 500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
        isActive ? 'border-cyan-400 bg-cyan-400/20 glow-cyan' : 'border-gray-600 bg-gray-800/50'
      }`}>
        <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
          isActive ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'
        }`}></div>
      </div>
      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 font-mono whitespace-nowrap">
        {skill}
      </span>
    </motion.div>
  );
};

const About = ({ onBack }) => {
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress(prev => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ y: [`0%`, `100%`] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-container rounded-full border border-cyan-400/30 mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono text-sm tracking-wider">AI PROFILE SCAN</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 glow-cyan">
              NEURAL ANALYSIS
            </h1>
            <div className="w-full max-w-md mx-auto bg-gray-800 rounded-full h-2 mb-4">
              <motion.div
                className="bg-cyan-400 h-2 rounded-full"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <p className="text-cyan-400 font-mono text-sm">SCANNING... {scanProgress}%</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="glass-card-refined p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-white">CORE DIRECTIVES</h3>
              </div>
              <div className="space-y-4">
                <DataStream text={bio.paragraph1} delay={1} />
                <br />
                <DataStream text={bio.paragraph2} delay={3} />
              </div>
            </motion.div>

            {/* Skills Network */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="glass-card-refined p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <Database className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">SKILL MATRIX</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillNode key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="glass-card-refined p-8 lg:col-span-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <Zap className="text-green-400" size={24} />
                <h3 className="text-xl font-bold text-white">EVOLUTION TIMELINE</h3>
              </div>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-green-400"></div>
                <div className="space-y-8">
                  {lifecycle.slice(-4).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                      className="flex items-center gap-6 relative"
                    >
                      <div className="w-4 h-4 bg-cyan-400 rounded-full relative z-10 glow-cyan"></div>
                      <div className="flex-1">
                        <div className="text-cyan-400 font-mono text-sm mb-1">{item.year}</div>
                        <div className="text-white font-semibold">{item.event}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-mono text-xs opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          >
            {Math.random().toString(36).substring(2, 8)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
