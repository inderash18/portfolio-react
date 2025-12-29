import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden group relative flex flex-col h-full hover-glow"
        >
            {/* Spotlight Gradient - Following cursor via CSS is hard without JS, but we can do a large hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                        <Code className="text-white group-hover:text-primary transition-colors" size={24} />
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                            title="View Code"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                            title="Live Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="border-t border-white/5 pt-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-cyan-200/80 tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
