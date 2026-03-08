import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palette, Home, Briefcase, User, Gauge, Heart, Send } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const { themes, setCurrentTheme, currentTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Work', path: '/projects', icon: Briefcase },
        { name: 'Approach', path: '/about', icon: User },
        { name: 'Resume', path: '/experience', icon: Gauge },
        { name: 'Interests', path: '/lifestyle', icon: Heart },
    ];

    const isHome = location.pathname === '/';

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-8 pointer-events-none"
            >
                <div className="flex items-center gap-3 p-1.5 bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-full border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 pointer-events-auto relative">
                    {/* Brand Identifier */}
                    <Link to="/" className="flex items-center gap-3 pl-4 pr-3 py-2 mr-2 border-r border-white/10 group">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                            <span className="text-[10px] font-black text-white tracking-widest">IM</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-white leading-tight tracking-[0.2em] uppercase">Inderash</span>
                            <span className="text-[8px] font-bold text-white/30 tracking-widest uppercase">Portfolio</span>
                        </div>
                    </Link>

                    {/* Navigation Items */}
                    <div className="flex items-center gap-1.5">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-500 group overflow-hidden"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] z-0"
                                            transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                                        />
                                    )}

                                    <Icon
                                        size={15}
                                        className={`relative z-10 transition-all duration-500 ${isActive ? 'text-black' : 'text-white/40 group-hover:text-white/70'}`}
                                    />

                                    {/* Link Text - Always visible but styled differently for professional clarity */}
                                    <span className={`relative z-10 text-[11px] font-bold tracking-tight uppercase transition-all duration-500
                                        ${isActive ? 'text-black w-auto opacity-100' : 'text-white/40 group-hover:text-white/70 w-0 group-hover:w-auto opacity-0 group-hover:opacity-100'}`}
                                    >
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="w-[1px] h-6 bg-white/10 mx-2" />

                    {/* Actions Area */}
                    <div className="flex items-center gap-2 pr-1.5">
                        <div className="relative">
                            <button
                                onClick={() => setIsThemeOpen(!isThemeOpen)}
                                className={`w-9 h-9 rounded-full transition-all flex items-center justify-center border ${isThemeOpen ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-white/5 text-white/40 hover:text-white border-white/5'}`}
                                title="Signature Palette"
                            >
                                <Palette size={16} />
                            </button>

                            <AnimatePresence>
                                {isThemeOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 15, scale: 1 }}
                                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                                        className="absolute top-full right-0 p-4 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl min-w-[240px] z-50 ring-1 ring-white/10"
                                    >
                                        <div className="flex items-center justify-between px-2 mb-4">
                                            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Signature Themes</span>
                                            <div className="w-1 h-1 rounded-full bg-primary animate-ping" />
                                        </div>
                                        <div className="grid grid-cols-1 gap-1.5">
                                            {themes.map((t) => (
                                                <button
                                                    key={t.name}
                                                    onClick={() => {
                                                        setCurrentTheme(t);
                                                        setIsThemeOpen(false);
                                                    }}
                                                    className={`flex items-center justify-between p-3 rounded-2xl transition-all border ${currentTheme.name === t.name ? 'border-primary/50 bg-primary/10' : 'border-transparent hover:bg-white/5'}`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]" style={{ backgroundColor: t.primary }}></div>
                                                        <span className={`text-[11px] font-bold ${currentTheme.name === t.name ? 'text-white' : 'text-white/40'}`}>{t.name}</span>
                                                    </div>
                                                    {currentTheme.name === t.name && <div className="w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/contact"
                            className="px-6 py-2.5 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            Connect
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-40 bg-black/60 pt-32 px-10 md:hidden"
                    >
                        <div className="flex flex-col gap-10 items-center">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold text-white/90 hover:text-primary transition-colors tracking-tighter"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-full flex flex-col items-center gap-8"
                            >
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full max-w-[200px] py-4 rounded-full bg-primary text-white font-bold text-center shadow-lg shadow-primary/20"
                                >
                                    Contact Us
                                </Link>

                                {/* Mobile Theme Selection */}
                                <div className="w-full border-t border-white/10 pt-10 px-4">
                                    <p className="text-center text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-6">Experience Atmosphere</p>
                                    <div className="flex justify-center flex-wrap gap-5">
                                        {themes.map((t) => (
                                            <button
                                                key={t.name}
                                                onClick={() => {
                                                    setCurrentTheme(t);
                                                    setIsOpen(false);
                                                }}
                                                className={`w-12 h-12 rounded-2xl border-2 transition-all p-1.5 ${currentTheme.name === t.name ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5'}`}
                                            >
                                                <div className="w-full h-full rounded-xl shadow-lg" style={{ backgroundColor: t.primary }}></div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
