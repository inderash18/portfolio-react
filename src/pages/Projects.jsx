import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const filters = ['All', 'Web', 'Hardware', 'AI', 'Automation'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="container-max py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
                <p className="text-xl text-text-muted max-w-2xl">
                    A selection of projects ranging from IoT hardware to full-stack web applications and AI integrations.
                </p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-12">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Projects;
