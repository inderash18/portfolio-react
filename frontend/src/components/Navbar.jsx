import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palette } from 'lucide-react';
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
        { name: 'What we do', path: '/projects' },
        { name: 'Our approach', path: '/about' },
        { name: 'About us', path: '/experience' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Life & Interests', path: '/lifestyle' },
    ];

    const isHome = location.pathname === '/';

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-6`}
            >
                <div
                    className={`
                        flex items-center justify-between px-8 py-4 transition-all duration-500 ease-in-out
                        rounded-[2.5rem] border backdrop-blur-xl
                        ${scrolled || isOpen
                            ? 'bg-black/40 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-6xl py-3'
                            : 'bg-white/5 border-white/20 shadow-none w-full max-w-5xl'}
                    `}
                    style={{
                        boxShadow: scrolled ? `0 10px 30px -10px ${currentTheme.glow}` : 'none'
                    }}
                >
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter z-50 group">
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white text-sm shadow-lg shadow-primary/20"
                        >
                            I.M
                        </motion.div>
                        <span className="text-white">Eterna<span className="text-primary group-hover:glow-sm transition-all">Cloud</span></span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[13px] uppercase tracking-widest font-semibold transition-all duration-300 hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white/70'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Theme Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsThemeOpen(!isThemeOpen)}
                                className={`w-10 h-10 rounded-full transition-all flex items-center justify-center border backdrop-blur-md ${isThemeOpen ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-white/5 text-white/70 hover:text-white border-white/10 hover:border-white/30'}`}
                                title="Change Color Palette"
                            >
                                <Palette size={18} />
                            </button>

                            <AnimatePresence>
                                {isThemeOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-4 p-4 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl min-w-[220px] z-50 grid grid-cols-1 gap-2"
                                    >
                                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest px-2 mb-2">Signature Themes</p>
                                        {themes.map((t) => (
                                            <button
                                                key={t.name}
                                                onClick={() => {
                                                    setCurrentTheme(t);
                                                    setIsThemeOpen(false);
                                                }}
                                                className={`flex items-center justify-between p-3 rounded-2xl transition-all hover:bg-white/5 group border ${currentTheme.name === t.name ? 'border-primary/50 bg-primary/10' : 'border-transparent'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full shadow-lg border-2 border-white/20" style={{ backgroundColor: t.primary }}></div>
                                                    <span className={`text-[11px] font-semibold tracking-wide ${currentTheme.name === t.name ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>{t.name}</span>
                                                </div>
                                                {currentTheme.name === t.name && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/contact"
                            className="px-8 py-3 rounded-full bg-primary text-white text-[13px] font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 uppercase tracking-wider"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
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
