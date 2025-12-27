import React from 'react';
import { motion } from 'framer-motion';
import { intro, skills, achievements } from '../data/portfolio';

const About = () => {
    return (
        <div className="container-max py-24">
            {/* Bio Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-16 mb-24"
            >
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
                    <div className="prose prose-invert prose-lg text-text-muted">
                        <p className="mb-6">{intro.bio}</p>
                        <p>
                            I believe in the power of technology to solve real-world problems. Whether it's optimizing a backend query or refining a UI animation, I approach every task with a problem-solving mindset and an eye for detail.
                        </p>
                        <p>
                            When I'm not coding, you can find me on the Kho-Kho field or exploring the latest developments in AI and Automation.
                        </p>
                    </div>
                </div>

                {/* Placeholder for Photo/Stats or just visual balance */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl -z-10"></div>
                    <div className="w-full h-full bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-12">
                        <div className="text-center">
                            <h3 className="text-6xl font-bold text-white mb-2">3+</h3>
                            <p className="text-text-muted uppercase tracking-widest text-sm">Years of Coding</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Skills Section */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Technical Toolkit
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="glass-card p-6 rounded-xl">
                            <h3 className="capitalize text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
                                {category}
                            </h3>
                            <div className="space-y-4">
                                {items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-text-muted">{skill.name}</span>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1.5 h-1.5 rounded-full ${i < skill.level ? 'bg-primary' : 'bg-white/10'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements Section */}
            <div>
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-1 bg-secondary rounded-full"></span>
                    Milestones
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((item) => (
                        <div key={item.id} className="glass-card p-8 rounded-xl border-l-4 border-l-secondary">
                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-sm text-text-muted">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default About;
