import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '../config/portfolio';
import { ExternalLink, Github, Eye } from 'lucide-react';

const HologramCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-96 cursor-pointer"
    >
      {/* Hologram Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl border border-cyan-400/20 backdrop-blur-sm transform-gpu">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-between transform-gpu">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-cyan-400 font-mono text-xs tracking-wider">PROJECT_{index + 1}</span>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center hover:bg-cyan-400/40 transition-colors"
                  >
                    <Github size={14} className="text-cyan-400" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center hover:bg-purple-400/40 transition-colors"
                  >
                    <ExternalLink size={14} className="text-purple-400" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-mono rounded-full border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hover Indicator */}
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye size={12} />
              <span>VIEW DETAILS</span>
            </div>
          </div>
        </div>

        {/* Hologram Effect Lines */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
};

const Projects = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-400/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-container rounded-full border border-cyan-400/30 mb-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider">HOLOGRAPHIC ARCHIVE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 glow-cyan">
            PROJECT MATRIX
          </h1>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
            Interactive neural projections of digital artifacts and computational achievements
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {projects.map((project, index) => (
            <HologramCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex gap-8 text-center"
        >
          <div className="glass-container px-6 py-3 rounded-full border border-cyan-400/20">
            <div className="text-2xl font-bold text-cyan-400">{projects.length}</div>
            <div className="text-xs text-gray-400 font-mono">ACTIVE PROJECTS</div>
          </div>
          <div className="glass-container px-6 py-3 rounded-full border border-purple-400/20">
            <div className="text-2xl font-bold text-purple-400">
              {projects.reduce((acc, p) => acc + p.tech.length, 0)}
            </div>
            <div className="text-xs text-gray-400 font-mono">TECHNOLOGIES</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
