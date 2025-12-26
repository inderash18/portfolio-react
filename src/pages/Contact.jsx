import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, socialLinks } from '../config/portfolio';
import { Terminal, Send, User, Mail, MapPin } from 'lucide-react';

const TerminalLine = ({ text, delay = 0, isCommand = false }) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="flex items-center gap-2 mb-2"
    >
      {isCommand ? (
        <span className="text-green-400 font-mono">user@terminal:~$</span>
      ) : (
        <span className="text-cyan-400 font-mono">system:</span>
      )}
      <span className="text-white font-mono">
        {displayedText}
        {currentIndex < text.length && <span className="animate-pulse">|</span>}
      </span>
    </motion.div>
  );
};

const Contact = ({ onBack }) => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);

  const commands = {
    help: 'Available commands: help, about, contact, social, clear',
    about: `Name: ${personalInfo.name}\nRole: ${personalInfo.role}\nLocation: ${personalInfo.location}\nEmail: ${personalInfo.email}`,
    contact: `Direct contact protocols initialized.\nEmail: ${personalInfo.email}\nLocation: ${personalInfo.location}`,
    social: `Social networks:\nGitHub: ${socialLinks.github}\nLinkedIn: ${socialLinks.linkedin}`,
    clear: 'clear'
  };

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    let response = '';

    if (commands[command]) {
      if (command === 'clear') {
        setTerminalLines([]);
        return;
      }
      response = commands[command];
    } else {
      response = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    const newLines = [
      { text: cmd, isCommand: true },
      { text: response, isCommand: false }
    ];

    setTerminalLines(prev => [...prev, ...newLines]);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  useEffect(() => {
    // Initial boot sequence
    const bootSequence = [
      'Initializing neural interface...',
      'Loading contact protocols...',
      'Establishing secure connection...',
      'Terminal ready. Type "help" for commands.',
    ];

    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, { text: line, isCommand: false }]);
      }, index * 1000);
    });
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
          animate={{ y: [`0%`, `100%`] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-container rounded-full border border-green-400/30 mb-6">
              <Terminal className="text-green-400" size={16} />
              <span className="text-green-400 font-mono text-sm tracking-wider">SECURE TERMINAL</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 glow-green">
              COMMUNICATION NODE
            </h1>
            <p className="text-gray-400 font-mono text-sm">
              Establish connection with the neural network
            </p>
          </motion.div>

          {/* Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass-card-refined p-6 h-96 flex flex-col"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-green-400/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-green-400 font-mono text-sm">contact@neural-network</span>
            </div>

            {/* Terminal Output */}
            <div
              ref={terminalRef}
              className="flex-1 overflow-y-auto mb-4 font-mono text-sm"
            >
              <AnimatePresence>
                {terminalLines.map((line, index) => (
                  <TerminalLine
                    key={index}
                    text={line.text}
                    isCommand={line.isCommand}
                    delay={0}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Command Input */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2">
              <span className="text-green-400 font-mono">user@terminal:~$</span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                placeholder="Type a command..."
                autoFocus
              />
              <button
                type="submit"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <div className="glass-container p-4 rounded-lg border border-green-400/20 text-center">
              <Mail className="text-green-400 mx-auto mb-2" size={24} />
              <div className="text-xs text-gray-400 font-mono mb-1">EMAIL</div>
              <div className="text-green-400 font-mono text-sm">{personalInfo.email}</div>
            </div>
            <div className="glass-container p-4 rounded-lg border border-cyan-400/20 text-center">
              <MapPin className="text-cyan-400 mx-auto mb-2" size={24} />
              <div className="text-xs text-gray-400 font-mono mb-1">LOCATION</div>
              <div className="text-cyan-400 font-mono text-sm">{personalInfo.location}</div>
            </div>
            <div className="glass-container p-4 rounded-lg border border-purple-400/20 text-center">
              <User className="text-purple-400 mx-auto mb-2" size={24} />
              <div className="text-xs text-gray-400 font-mono mb-1">STATUS</div>
              <div className="text-purple-400 font-mono text-sm">ONLINE</div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center gap-6 mt-8"
          >
            <a
              href={socialLinks.github}
              className="btn-glass px-6 py-3 glow-cyan text-cyan-400 font-mono hover:scale-105 transition-transform"
            >
              GITHUB
            </a>
            <a
              href={socialLinks.linkedin}
              className="btn-glass px-6 py-3 glow-purple text-purple-400 font-mono hover:scale-105 transition-transform"
            >
              LINKEDIN
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
