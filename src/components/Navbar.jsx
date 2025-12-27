import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight z-50">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-xs">I.M</span>
                        <span>Eterna<span className="text-purple-600">Cloud</span></span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium hover:text-purple-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            Contact
                        </Link>
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
                                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
