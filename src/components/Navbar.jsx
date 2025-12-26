import React, { useState, useEffect } from 'react';
import { personalInfo } from '../config/portfolio';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'NEXUS', href: '#projects' },
        { name: 'IDENTITY', href: '#about' },
        { name: 'SIGNAL', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 ${scrolled ? 'pt-4' : 'pt-10'
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center group">
                {/* Brand Logo - Professional Ghost Style */}
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="flex flex-col items-start gap-1 p-2 transition-all cursor-pointer"
                >
                    <span className="text-xl font-black text-white tracking-widest uppercase italic">
                        {personalInfo.name.split('.')[0]}<span className="text-accent">OS</span>
                    </span>
                    <div className="w-full h-[1px] bg-white/10 group-hover:bg-accent transition-all duration-500"></div>
                </a>

                {/* Central Pill - Transparent Glass */}
                <div className={`hidden md:flex items-center glass-container px-2 py-1.5 rounded-full border-white/5 transition-all duration-700 ${scrolled ? 'bg-white/5 shadow-2xl' : 'bg-transparent'
                    }`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="px-6 py-2 text-[10px] font-black text-zinc-500 hover:text-white transition-all tracking-[0.3em] uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Call to Action */}
                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className="btn-glass !py-2.5 !px-6 group overflow-hidden"
                    >
                        <span className="flex items-center text-[10px] font-black tracking-widest uppercase">
                            Initialize
                            <ArrowUpRight size={12} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-3 glass-container rounded-2xl text-white border-white/5"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[101] md:hidden flex flex-col items-center justify-center p-10"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white"><X size={32} /></button>
                        <div className="space-y-12 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="block text-4xl font-black text-white hover:text-accent uppercase tracking-tighter"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
