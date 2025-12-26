import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Code, Database, Wrench, Sparkles } from 'lucide-react';

const About = () => {
    const skills = {
        frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Next.js', 'Vue.js'],
        backend: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
        tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma', 'VS Code', 'Postman', 'Linux'],
    };

    const skillCategories = [
        { title: 'Frontend', icon: Code, skills: skills.frontend, color: 'text-blue-500' },
        { title: 'Backend', icon: Database, skills: skills.backend, color: 'text-green-500' },
        { title: 'Tools & Others', icon: Wrench, skills: skills.tools, color: 'text-purple-500' },
    ];

    return (
        <section id="about" className="min-h-screen py-20 bg-gray-900/50">
            <div className="section-container">
                <SectionTitle
                    title="About Me"
                    subtitle="Get to know more about my background and expertise"
                />

                {/* Bio Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="card">
                        <div className="flex items-start space-x-4 mb-4">
                            <Sparkles className="text-primary mt-1" size={24} />
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I'm a passionate Full Stack Developer with over 5 years of experience building
                                    web applications that solve real-world problems. I specialize in creating
                                    scalable, performant, and user-friendly solutions using modern technologies.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    When I'm not coding, you'll find me exploring new technologies, contributing to
                                    open-source projects, or sharing knowledge with the developer community. I believe
                                    in continuous learning and staying updated with the latest industry trends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div key={index} className="card">
                                <div className="flex items-center space-x-3 mb-6">
                                    <Icon className={category.color} size={28} />
                                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-primary hover:text-primary transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
