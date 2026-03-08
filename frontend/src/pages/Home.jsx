import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { intro, projects, experience, contact } from '../data/portfolio';
import { ArrowRight, Github, Linkedin, Download, Code, Database, Terminal, Cpu, Play } from 'lucide-react';
import AuroraHero from '../components/AuroraHero';
import ProjectCard from '../components/ProjectCard';
import CountUp from '../components/CountUp';
import RollingCounter from '../components/RollingCounter';
import CosmicGlobe from '../components/CosmicGlobe';
import { useTheme } from '../components/ThemeContext';

const Home = () => {
    const [views, setViews] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const { currentTheme } = useTheme();

    React.useEffect(() => {
        const initialViews = parseInt(localStorage.getItem('portfolio_views') || "14205") + 1;
        localStorage.setItem('portfolio_views', initialViews.toString());
        setViews(initialViews);
        setHours(2850);
    }, []);

    const getPlaces = (num) => {
        const str = num.toString();
        const places = [];
        let multiplier = 1;
        for (let i = 0; i < str.length; i++) {
            places.unshift(multiplier);
            multiplier *= 10;
        }
        return places;
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="w-full relative selection:bg-primary/20">
            <AuroraHero />

            {/* HERO SECTION */}
            <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none z-0" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="container-max relative z-10 w-full text-center"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"></span>
                        Developer (MERN Stack)
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight mb-10 leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                    >
                        Perfecting every detail <br className="hidden md:block" />
                        for <span className="text-white">intelligent code</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-text-muted mb-16 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {intro.subtext}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/projects"
                            className="px-10 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-xl shadow-white/5"
                        >
                            View Work
                        </Link>
                        <button className="px-10 py-5 bg-transparent border border-white/10 text-white font-black rounded-full hover:bg-white/5 transition-all text-xs uppercase tracking-widest flex items-center gap-3 group">
                            <Play size={14} className="fill-white group-hover:fill-primary group-hover:text-primary transition-colors" />
                            See how it works
                        </button>
                    </motion.div>

                    {/* STATS SECTION */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl mx-auto border-t border-white/5 pt-16"
                    >
                        {[
                            { label: "Years Experience", value: 3, suffix: "+" },
                            { label: "Projects Completed", value: 12, suffix: "+" },
                            { label: "Code Quality", value: 100, suffix: "%" },
                            { label: "Commitment", value: 24, suffix: "/7" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <h3 className="text-4xl sm:text-5xl font-black text-white flex justify-center items-center mb-3">
                                    <CountUp to={stat.value} duration={3} />
                                    <span className="text-primary ml-1">{stat.suffix}</span>
                                </h3>
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors leading-tight">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* CORE COMPETENCIES */}
            <section className="py-32 relative z-10 bg-gradient-to-b from-transparent to-white/[0.01]">
                <div className="container-max">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4">High-Touch Precision</h2>
                            <h3 className="text-4xl sm:text-5xl font-black leading-tight text-white">
                                A collaborative and intuitive <br />
                                <span className="text-white/40">partner you can count on</span>
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all group backdrop-blur-xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                                <div className="w-14 h-14 mb-8 bg-white/5 rounded-2xl flex items-center justify-center text-white ring-1 ring-white/10 group-hover:scale-110 transition-transform">
                                    <s.icon size={24} />
                                </div>
                                <h4 className="text-lg font-black mb-3 text-white uppercase tracking-tight">{s.label}</h4>
                                <p className="text-sm text-text-muted leading-relaxed font-medium">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WORK SHOWCASE */}
            <section className="py-32 relative z-10">
                <div className="container-max">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4">What we build</h2>
                            <h2 className="text-4xl sm:text-5xl font-black text-white">Featured Projects</h2>
                        </div>
                        <Link to="/projects" className="group flex items-center gap-3 text-white/40 hover:text-white transition-all text-sm font-black uppercase tracking-widest">
                            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.slice(0, 3).map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CAREER MILESTONES */}
            <section className="py-32 relative z-10 bg-white/[0.01]">
                <div className="container-max grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4">Our History</h2>
                        <h3 className="text-4xl sm:text-5xl font-black mb-12 text-white leading-tight">Trusted by Fortune 10 <br /> hyperscalers</h3>

                        <div className="space-y-16">
                            {experience.slice(0, 2).map((exp, i) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="relative pl-10 border-l border-white/5"
                                >
                                    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-white ring-4 ring-white/5 shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
                                    <h4 className="text-2xl font-black text-white mb-2 leading-tight">{exp.role}</h4>
                                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">{exp.org} — {exp.date}</p>
                                    <p className="text-text-muted text-sm leading-relaxed max-w-md font-medium">{exp.desc[0]}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square flex items-center justify-center p-12 bg-[#050508] rounded-[3rem] border border-white/5 shadow-2xl group overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <CosmicGlobe />
                    </div>
                </div>
            </section>

            {/* COLLABORATION INVITATION */}
            <section className="py-40 text-center relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

                <div className="container-max max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 text-white leading-[0.95] tracking-tight">
                            You steadily gain <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">dependable momentum</span>
                        </h2>
                        <p className="text-xl text-text-muted mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                            Progress shouldn't feel like pressure. We accelerate outcomes and simplify workstreams by removing friction.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black rounded-full hover:scale-110 transition-all text-sm uppercase tracking-widest shadow-2xl">
                            Get Started <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* LIVE TELEMETRY */}
            <section className="py-24 border-y border-white/5 bg-black/40 backdrop-blur-3xl relative z-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-16 md:gap-32 items-center">
                        {[
                            { label: "Hours of Code", value: hours },
                            { label: "Total Visits", value: views },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="mb-6 h-20 flex items-center justify-center">
                                    {stat.value > 0 && (
                                        <RollingCounter
                                            value={stat.value}
                                            fontSize={64}
                                            gap={2}
                                            textColor={currentTheme.primary}
                                            places={getPlaces(stat.value)}
                                            gradientFrom="#020205"
                                        />
                                    )}
                                </div>
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] group-hover:text-primary transition-colors">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

