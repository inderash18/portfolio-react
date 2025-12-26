import React from 'react';
import { motion } from 'framer-motion';
import { bio, lifecycle, skills, hobbies } from '../config/portfolio';
import { Layers, Activity, Target, Zap } from 'lucide-react';

const RefinedCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className={`glass-card-refined p-10 flex flex-col ${className}`}
    >
        {children}
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-40 px-6">
            <div className="section-container">
                <div className="max-w-3xl mb-32">
                    <span className="text-[10px] font-black tracking-[1em] text-zinc-500 uppercase mb-6 block">Identity Hub</span>
                    <h2 className="text-display text-white mb-10">Architecting value through technical precision.</h2>
                    <p className="text-zinc-500 text-xl leading-relaxed">
                        {bio.paragraph1}
                    </p>
                </div>

                <div className="bento-layout">
                    {/* Professional DNA Case */}
                    <RefinedCard className="col-span-12 lg:col-span-7 row-span-2">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <Layers size={24} className="text-white" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">Profile_Analysis</span>
                        </div>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            {bio.paragraph2}
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
                            <div>
                                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-2 block">Origin_Base</span>
                                <span className="text-sm font-bold text-white uppercase">Coimbatore, IN</span>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-2 block">Language_Stack</span>
                                <span className="text-sm font-bold text-white uppercase">MERN + AI_DEV</span>
                            </div>
                        </div>
                    </RefinedCard>

                    {/* Performance Rings / Dynamic Data */}
                    <RefinedCard className="col-span-12 lg:col-span-5 items-center justify-center text-center">
                        <div className="relative w-40 h-40 mb-8">
                            <div className="absolute inset-0 rounded-full border-[10px] border-white/5"></div>
                            <div className="absolute inset-0 rounded-full border-t-[10px] border-accent animate-spin" style={{ animationDuration: '3s' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-black text-white">99%</span>
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Efficiency Protocol Active</span>
                    </RefinedCard>

                    {/* Timeline Minimal */}
                    <RefinedCard className="col-span-12 lg:col-span-5">
                        <h4 className="text-xl font-bold mb-10 flex items-center gap-3">
                            <Activity size={20} className="text-zinc-700" />
                            Trajectory Nexus
                        </h4>
                        <div className="space-y-8">
                            {lifecycle.slice(-3).map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <span className="text-[10px] font-black text-zinc-700 group-hover:text-accent transition-colors pt-1">{item.year}</span>
                                    <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors uppercase tracking-tight">{item.event}</span>
                                </div>
                            ))}
                        </div>
                    </RefinedCard>
                </div>
            </div>
        </section>
    );
};

export default About;
