import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HubScene from './CentralHub';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const FuturisticInterface = () => {
  const [currentSection, setCurrentSection] = useState('hub');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (section) => {
    if (section !== currentSection && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSection(section);
        setIsTransitioning(false);
      }, 1000); // Transition duration
    }
  };

  const handleBackToHub = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection('hub');
      setIsTransitioning(false);
    }, 1000);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onBack={handleBackToHub} />;
      case 'about':
        return <About onBack={handleBackToHub} />;
      case 'projects':
        return <Projects onBack={handleBackToHub} />;
      case 'contact':
        return <Contact onBack={handleBackToHub} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background 3D Environment */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {currentSection === 'hub' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <HubScene onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section Content */}
      <AnimatePresence>
        {currentSection !== 'hub' && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, z: -100 }}
            animate={{ scale: 1, opacity: 1, z: 0 }}
            exit={{ scale: 0.8, opacity: 0, z: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1
            }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="w-full h-full relative">
              {renderSection()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <AnimatePresence>
        {currentSection !== 'hub' && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            onClick={handleBackToHub}
            className="absolute top-8 left-8 z-20 btn-glass glow-cyan text-cyan-400 font-mono text-sm"
            disabled={isTransitioning}
          >
            [ESC] BACK TO HUB
          </motion.button>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 font-mono text-lg animate-pulse">INITIALIZING...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FuturisticInterface;