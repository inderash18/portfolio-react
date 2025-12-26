import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../config/portfolio';

const Projects = () => {
    return (
        <section id="projects" className="py-40 px-6">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black tracking-[1.5em] text-zinc-600 uppercase mb-8 block">// PROJECT_NEXUS</span>
                        <h2 className="text-display text-white">Curated <br /> Engineering.</h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="glass-container px-6 py-2 rounded-full border-white/5 mb-6">
                            <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">ACTIVE_DEPLOYS: 0{projects.length}</span>
                        </div>
                        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] text-right max-w-[200px] leading-relaxed">
                            Pushing the limits of functional transparency.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
