import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ArrowUp, Palette } from 'lucide-react';
import { contact } from '../data/portfolio';
import Background from './Background';
import { useTheme } from './ThemeContext';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const { themes, setCurrentTheme, currentTheme } = useTheme();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Contact', path: '/contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen relative selection:bg-primary/30 selection:text-white">
            <Background />
            {/* Skip to Content */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-white rounded-md z-50">
                Skip to content
            </a>

            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5">
                <nav className="container-max h-16 flex items-center justify-between">
                    <NavLink to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight z-50 text-white">
                        <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">🤞</span>
                        <span>INDERASH<span className="text-primary">.M</span></span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-all hover:text-primary ${isActive ? 'text-primary' : 'text-text-muted'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Theme Switcher Button */}
                        <div className="relative">
                            <button
                                onClick={() => setIsThemeOpen(!isThemeOpen)}
                                className={`p-2 rounded-xl transition-all flex items-center justify-center border ${isThemeOpen ? 'bg-primary text-white border-primary' : 'bg-white/5 text-white/70 hover:text-primary border-white/10'}`}
                                title="Change Color Palette"
                            >
                                <Palette size={18} />
                            </button>

                            {isThemeOpen && (
                                <div className="absolute top-8 right-0 mt-3 p-3 bg-[#141414] border border-white/10 rounded-2xl shadow-2xl min-w-[200px] z-50 grid grid-cols-1 gap-2">
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
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-text-muted hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Nav Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-bg-card border-b border-white/10 p-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `text-lg font-medium px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            {/* Mobile Theme Selection */}
                            <div className="mt-2 border-t border-white/5 pt-4">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-4">Choose Style</p>
                                <div className="flex justify-around gap-2 px-4">
                                    {themes.map((t) => (
                                        <button
                                            key={t.name}
                                            onClick={() => {
                                                setCurrentTheme(t);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`w-8 h-8 rounded-full border-2 transition-all ${currentTheme.name === t.name ? 'border-primary scale-110' : 'border-transparent'}`}
                                            style={{ backgroundColor: t.primary }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main id="main-content" className="flex-grow pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-bg-card/30 mt-20">
                <div className="container-max py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-text-muted text-sm text-center md:text-left">
                        <p>© {new Date().getFullYear()} Inderash Built with React & Tailwind.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        {contact.social.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-yellow-500 transition-colors"
                                aria-label={link.name}
                            >
                                {link.name === 'GitHub' && <Github size={20} />}
                                {link.name === 'LinkedIn' && <Linkedin size={20} />}
                            </a>
                        ))}
                        <a href={`mailto:${contact.email}`} className="text-text-muted hover:text-yellow-500 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:-translate-y-1 z-40"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </div>
    );
};

export default Layout;
