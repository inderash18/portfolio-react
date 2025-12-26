import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, demoLink, githubLink, image }) => {
    return (
        <div className="card group">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-800 h-48">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                        <span className="text-6xl">🚀</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-primary text-sm rounded-full border border-gray-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4">
                {demoLink && (
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Github size={18} />
                        <span>Code</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
