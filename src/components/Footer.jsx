import React from 'react';
import { personalInfo, socialLinks } from '../config/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-gray-100">
            <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-sm font-bold text-gray-900 tracking-tight mb-2">
                        {personalInfo.name}
                    </span>
                    <p className="text-xs text-gray-400 font-medium">
                        Software Engineer & Fullstack Developer
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Github size={18} />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Mail size={18} />
                    </a>
                </div>

                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    © {new Date().getFullYear()} — Built with Code & Precision
                </div>
            </div>
        </footer>
    );
};

export default Footer;
