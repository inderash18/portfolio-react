import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { intro, projects, skills, experience, contact } from '../data/portfolio';
import { ArrowRight, Github, Linkedin, Download, ExternalLink, Code, Database, Terminal, Cpu } from 'lucide-react';
import NeuralBrain from '../components/NeuralBrain';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden mb-20">
                <div className="container-max grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full py-20 lg:py-0">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1 relative z-20"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            {intro.role}
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Transforming Ideas into <br className="hidden lg:block" />
                            <span className="text-gradient">Intelligent Code</span>.
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg sm:text-xl text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            {intro.subtext}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Link
                                to="/projects"
                                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                            >
                                View Projects <ArrowRight size={18} />
                            </Link>

                            <a
                                href="/resume.pdf"
                                download="Inderash_Resume.pdf"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                Download Resume <Download size={18} />
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-white/5">
                            <span className="text-sm text-text-muted font-medium uppercase tracking-wider">Trusted on</span>
                            <div className="flex gap-4 text-text-muted">
                                {contact.social.map((social) => {
                                    /* Icon Mapping */
                                    const Icon = {
                                        Github: Github,
                                        Linkedin: Linkedin,
                                        Code: Code,
                                        Terminal: Terminal
                                    }[social.icon] || Github;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-cyan-400 transition-colors cursor-pointer"
                                            title={social.name}
                                        >
                                            <Icon size={22} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Brain Animation */}
                    <div className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full relative">
                        <Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
                            <div className="absolute inset-0 scale-125 lg:scale-110">
                                <NeuralBrain />
                            </div>
                        </Suspense>
                    </div>
                </div>
            </section>

            {/* SKILLS STRIP SECTION */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Technical Proficiency</h2>
                        <h3 className="text-3xl font-bold">Powering Next-Gen Applications</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Code, label: "Frontend", desc: "React, Tailwind, HTML5" },
                            { icon: Terminal, label: "Backend", desc: "Node, Express, Mongo" },
                            { icon: Cpu, label: "Hardware", desc: "IoT, Arduino, Sensors" },
                            { icon: Database, label: "Data", desc: "Analytics, SQL, Python" }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <s.icon size={24} />
                                </div>
                                <h4 className="text-lg font-bold mb-1">{s.label}</h4>
                                <p className="text-sm text-text-muted">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS SECTION */}
            <section className="py-24">
                <div className="container-max">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
                            <p className="text-text-muted max-w-xl">
                                A glimpse into my portfolio of web applications, IoT systems, and automation tools.
                            </p>
                        </div>
                        <Link to="/projects" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                            View All Projects <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE SNIPPET */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left -z-10"></div>
                <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Professional Journey</h2>
                        <div className="space-y-8">
                            {experience.slice(0, 2).map((exp) => (
                                <div key={exp.id} className="relative pl-8 border-l-2 border-primary/30">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-dark border-2 border-primary"></span>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-primary text-sm mb-2">{exp.org} | {exp.date}</p>
                                    <p className="text-text-muted text-sm line-clamp-2">{exp.desc[0]}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Link to="/experience" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors inline-block">
                                View Full Timeline
                            </Link>
                        </div>
                    </div>

                    {/* Visual Decoration for Experience */}
                    <div className="relative h-full min-h-[300px] hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-white/5 backdrop-blur-sm p-8 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-6xl font-bold text-white mb-2">3+</p>
                                <p className="text-sm uppercase tracking-widest text-text-muted">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 text-center">
                <div className="container-max max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start a project?</h2>
                    <p className="text-xl text-text-muted mb-10">
                        I'm currently available for freelance work and open to full-time opportunities.
                        Let's build something amazing together.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg hover:shadow-primary/25 transition-all text-lg">
                        Let's Talk <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
