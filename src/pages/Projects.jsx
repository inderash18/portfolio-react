import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../config/portfolio';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20">
            <div className="section-container">
                <SectionTitle
                    title="My Projects"
                    subtitle="Explore some of my recent work and side projects"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
