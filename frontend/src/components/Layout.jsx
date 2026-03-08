import React from 'react';
import { useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { contact } from '../data/portfolio';
import Navbar from './Navbar';
import Background from './Background';
import { useTheme } from './ThemeContext';

const Layout = ({ children }) => {
    const { currentTheme } = useTheme();
    const location = useLocation();

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

            <Navbar />

            {/* Main Content */}
            <main id="main-content" className="flex-grow pt-32 pb-16">
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
