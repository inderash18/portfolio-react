import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add hover detection for interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = target.matches('button, a, [role="button"], input, textarea, select, [onclick], [onmouseenter]');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleElementHover, true);
    window.addEventListener('mouseleave', handleElementHover, true);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleElementHover, true);
      window.removeEventListener('mouseleave', handleElementHover, true);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Energy Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="relative">
          {/* Core Energy Orb */}
          <motion.div
            className="w-8 h-8 rounded-full bg-cyan-400/80 blur-sm"
            animate={{
              scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
              opacity: isHovering ? 1 : 0.8,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />

          {/* Outer Glow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400/60"
            animate={{
              scale: isClicking ? 1.2 : isHovering ? 2 : 1.5,
              opacity: isHovering ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {/* Energy Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 60}deg) translateY(-20px)`,
              }}
              animate={{
                scale: isHovering ? [1, 1.5, 1] : [0.5, 1, 0.5],
                opacity: isHovering ? [0.8, 1, 0.8] : [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Click Ripple Effect */}
          <AnimatePresence>
            {isClicking && (
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-cyan-400/40"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Background Energy Trails */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
      >
        <div className="w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl" />
      </motion.div>

      {/* Subtle Grid Interaction */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="w-64 h-64 rounded-full bg-gradient-radial from-cyan-400/5 via-transparent to-transparent" />
      </motion.div>
    </>
  );
};

export default Cursor;
