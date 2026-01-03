import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const Experience = () => {
    return (
        <div className="container-max py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Journey</h1>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-bg-dark border-2 border-primary shadow-[0_0_10px_var(--primary-glow)]"></span>

                            <div className="glass-card p-8 rounded-xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                        <p className="text-primary font-medium">{item.org}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-text-muted border border-white/10 w-fit">
                                        {item.date}
                                    </span>
                                </div>

                                <ul className="list-disc list-inside space-y-2 text-text-muted text-sm leading-relaxed marker:text-primary">
                                    {item.desc.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;
