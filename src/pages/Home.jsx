import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo } from '../config/portfolio';

const Home = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
            <div className="section-container relative z-10 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 glass-container rounded-full mb-10"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">System Identity: Deployment Successful</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-hero text-gradient mb-10"
                >
                    Crafting <br /> Seamless <br /> Realities.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-16 font-light"
                >
                    I'm <span className="text-white font-semibold">{personalInfo.name}</span>.
                    Specializing in high-performance digital architecture and invisible design patterns.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <a href="#projects" className="btn-glass px-10 py-5 group">
                        Explore Nexus
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#about" className="px-10 py-5 font-bold hover:text-zinc-400 transition-colors">
                        The Story
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 opacity-50"
            >
                <ChevronDown size={32} strokeWidth={1} />
            </motion.div>
        </section>
    );
};

export default Home;
