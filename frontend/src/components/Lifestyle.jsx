import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Users, Cpu, Sunrise, BookOpen, Code, Moon } from 'lucide-react';
import { interests, routine } from '../data/portfolio';

const iconMap = {
    Activity, Zap, Users, Cpu, Sunrise, BookOpen, Code, Moon
};

const Lifestyle = () => {
    return (
        <div className="py-24">

            {/* Passion & Interests Section */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Beyond the Code
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {interests.map((item, index) => {
                        const Icon = iconMap[item.icon] || Activity;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-all border border-white/5"
                            >
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Daily Routine Section */}
            <div>
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                    <span className="w-8 h-1 bg-secondary rounded-full"></span>
                    Daily Rhythm
                </h2>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12">
                    {routine.map((item, index) => {
                        const Icon = iconMap[item.icon] || Activity;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-12 md:pl-16"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

                                {/* Content */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 group">
                                    <div className="min-w-[100px] text-sm font-semibold text-secondary tracking-widest uppercase">
                                        {item.time}
                                    </div>
                                    <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors flex items-center gap-4">
                                        <div className="p-2 bg-white/10 rounded-lg text-white">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-gray-200 font-medium">{item.activity}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Lifestyle;
