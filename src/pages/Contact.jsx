import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../config/portfolio';
import { Mail, Globe, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-40 px-6">
            <div className="section-container">
                <div className="glass-card-refined !p-12 md:!p-24 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] transition-colors group-hover:bg-accent/10"></div>

                    <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                        <div>
                            <span className="text-[10px] font-black tracking-[1.5em] text-zinc-600 uppercase mb-10 block">Signal Node</span>
                            <h2 className="text-display text-white mb-10 italic">Ready to <br /> Connect?</h2>

                            <div className="space-y-10 mb-16">
                                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group/link">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover/link:border-white/40 transition-all">
                                        <Mail size={24} className="text-zinc-500 group-hover/link:text-white" />
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block mb-1">Direct Network</span>
                                        <span className="text-lg font-bold text-white group-hover/link:text-accent">{personalInfo.email}</span>
                                    </div>
                                </a>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                                        <Globe size={24} className="text-zinc-500" />
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block mb-1">Origin Node</span>
                                        <span className="text-lg font-bold text-white uppercase">{personalInfo.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {[
                                    { name: 'Github', href: socialLinks.github },
                                    { name: 'Linkedin', href: socialLinks.linkedin }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="btn-glass !py-3 !px-6 text-[10px] uppercase font-black"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-black/20 border border-white/5 p-12 rounded-[2rem] backdrop-blur-3xl">
                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.6em] ml-1">Identity_Input</label>
                                    <input type="text" placeholder="YOUR NAME" className="w-full bg-white/5 border-b border-white/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors text-white font-bold placeholder:text-zinc-800" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.6em] ml-1">Protocol_Email</label>
                                    <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border-b border-white/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors text-white font-bold placeholder:text-zinc-800" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.6em] ml-1">Transmission_Data</label>
                                    <textarea placeholder="COMPOSE MESSAGE..." className="w-full bg-white/5 border-b border-white/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors text-white font-bold h-32 resize-none placeholder:text-zinc-800"></textarea>
                                </div>
                                <button className="w-full btn-glass justify-center py-6 text-xs uppercase tracking-widest font-black">
                                    Initialize Transmission
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Final Professional Signature */}
                <div className="mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-[10px] font-bold text-zinc-700 uppercase tracking-[1em]">
                        © {new Date().getFullYear()} / {personalInfo.name} CORE
                    </div>
                    <div className="flex gap-12 font-mono text-[10px] text-zinc-500">
                        <span>EST_2025</span>
                        <span>LATENCY_0.02MS</span>
                        <span>DEPLOY_READY</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
