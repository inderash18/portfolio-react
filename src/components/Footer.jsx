import React from 'react';
import { Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { social } from '../data/portfolio';

const Footer = () => {
    const iconMap = {
        Github: Github,
        Linkedin: Linkedin,
        Mail: Mail,
        Code: Code,
        Terminal: Terminal,
    };

    return (
        <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-6xl md:text-[8rem] font-bold text-white/5 tracking-tighter select-none pointer-events-none mb-8">
                    INDERASH
                </h2>

                <div className="flex justify-center gap-8 mb-8">
                    {social.map((link, index) => {
                        const Icon = iconMap[link.icon] || Code;
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 text-gray-400"
                            >
                                <Icon size={20} />
                            </a>
                        );
                    })}
                </div>

                <p className="text-sm text-gray-600 font-mono">
                    © {new Date().getFullYear()} Inderash. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
