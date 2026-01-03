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
                className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4`}
            >
                <div className={`
                    flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
                    ${scrolled || isOpen ? 'bg-white text-black shadow-lg w-full max-w-5xl' : 'bg-white/90 backdrop-blur-md text-black w-full max-w-5xl border border-white/20'}
                `}>
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight z-50">
                        <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">I.M</span>
                        <span>Eterna<span className="text-primary">Cloud</span></span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            Contact
                        </Link>

                        {/* Theme Switcher Button */}
                        <div className="relative">
                            <button
                                onClick={() => setIsThemeOpen(!isThemeOpen)}
                                className={`p-2 rounded-xl transition-all flex items-center justify-center border ${isThemeOpen ? 'bg-primary text-white border-primary' : 'bg-black/5 text-black hover:text-primary border-black/10'}`}
                                title="Change Color Palette"
                            >
                                <Palette size={20} />
                            </button>

                            <AnimatePresence>
                                {isThemeOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-3 p-3 bg-bg-card border border-white/10 rounded-2xl shadow-2xl min-w-[200px] z-50 grid grid-cols-1 gap-2"
                                    >
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-1">Select Theme</p>
                                        {themes.map((t) => (
                                            <button
                                                key={t.name}
                                                onClick={() => {
                                                    setCurrentTheme(t);
                                                    setIsThemeOpen(false);
                                                }}
                                                className={`flex items-center gap-3 p-2 rounded-xl transition-all hover:bg-white/5 text-left border ${currentTheme.name === t.name ? 'border-primary/50 bg-primary/10' : 'border-transparent'}`}
                                            >
                                                <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: t.primary }}></div>
                                                <span className={`text-xs font-medium ${currentTheme.name === t.name ? 'text-white' : 'text-gray-400'}`}>{t.name}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden z-50 p-1" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold text-gray-900"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-bold"
                            >
                                Contact Us
                            </Link>

                            {/* Mobile Theme Selection */}
                            <div className="mt-4 w-full border-t border-gray-100 pt-6">
                                <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Choose Style</p>
                                <div className="flex justify-center gap-4">
                                    {themes.map((t) => (
                                        <button
                                            key={t.name}
                                            onClick={() => {
                                                setCurrentTheme(t);
                                                setIsOpen(false);
                                            }}
                                            className={`w-10 h-10 rounded-full border-2 transition-all p-1 ${currentTheme.name === t.name ? 'border-primary' : 'border-transparent'}`}
                                        >
                                            <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: t.primary }}></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
