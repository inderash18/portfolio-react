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
        // Simulate data fetching/calculation
        const storedViews = localStorage.getItem('portfolio_views');
        const initialViews = storedViews ? parseInt(storedViews) + 1 : 14205;
        localStorage.setItem('portfolio_views', initialViews.toString());

        setViews(initialViews);
        setHours(2850); // Example static hours
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

    return (
        <div className="w-full relative">
            <AuroraHero />

            {/* HERO SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">

                {/* Central Glow Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

                <div className="container-max relative z-10 w-full text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase mb-8 cursor-pointer hover:bg-white/10 transition-colors"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Developer (MERN Stack)
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                    >
                        Perfecting every detail <br className="hidden md:block" />
                        for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">intelligent code</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        {intro.subtext}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2"
                        >
                            View Work <ArrowRight size={18} />
                        </Link>

                        <button
                            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
                        >
                            <Play size={16} fill="white" /> See how it works
                        </button>
                    </motion.div>

                    {/* STATS COUNTUP SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mx-auto border-t border-white/10 pt-8"
                    >
                        {[
                            { label: "Years Experience", value: 3, suffix: "+" },
                            { label: "Projects Completed", value: 12, suffix: "+" },
                            { label: "Code Quality", value: 100, suffix: "%" },
                            { label: "Commitment", value: 24, suffix: "/7" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group hover:bg-white/5  p-4 rounded-xl transition-colors duration-300">
                                <h3 className="text-4xl font-bold text-white flex justify-center items-center mb-1">
                                    <CountUp to={stat.value} duration={2.5} separator="," />
                                    <span className="text-primary">{stat.suffix}</span>
                                </h3>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none" />
            </section>

            {/* SKILLS STRIP SECTION - Eterna Style */}
            <section className="py-24 border-t border-white/5 relative z-10">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">High-Touch Precision</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold">A collaborative and intuitive <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">partner you can count on</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 mb-6 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-white/5">
                                    <s.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-gray-100">{s.label}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS SECTION */}
            <section className="py-24 relative z-10">
                <div className="container-max">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">What we build</h2>
                            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
                        </div>
                        <Link to="/projects" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                            View All <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE SNIPPET - Eterna Style */}
            <section className="py-24 relative overflow-hidden z-10">
                {/* Decoration */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container-max grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Our History</h2>
                        <h3 className="text-4xl font-bold mb-8">Trusted by Fortune 10 <br /> hyperscalers</h3>

                        <div className="space-y-12">
                            {experience.slice(0, 2).map((exp) => (
                                <div key={exp.id} className="relative pl-8 border-l border-white/10">
                                    <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_var(--primary-glow)]"></span>
                                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                                    <p className="text-primary text-sm mb-3">{exp.org} | {exp.date}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{exp.desc[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cosmic Globe Visual */}
                    <div className="relative h-full min-h-[400px] flex items-center justify-center p-8 bg-white/[0.02] rounded-3xl border border-white/5">
                        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                        <CosmicGlobe />
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 text-center relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 pointer-events-none" />

                <div className="container-max max-w-3xl relative z-10">
                    <h2 className="text-5xl font-bold mb-8">You steadily gain <br /> dependable momentum</h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        Progress shouldn't feel like pressure. We accelerate outcomes and simplify workstreams by removing friction.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white font-bold rounded-full hover:shadow-[0_0_20px_var(--primary-glow)] transition-all text-lg">
                        Get Started <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* LIVE STATS SECTION */}
            <section className="py-16 border-t border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
                        <div className="text-center group">
                            <div className="mb-4 h-16 flex items-center justify-center overflow-hidden">
                                {hours > 0 && (
                                    <RollingCounter
                                        value={hours}
                                        fontSize={40}
                                        gap={2}
                                        textColor={currentTheme.primary}
                                        places={getPlaces(hours)}
                                        gradientFrom="#0a0a0a"
                                    />
                                )}
                            </div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Hours of Code</p>
                        </div>

                        <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                        <div className="text-center group">
                            <div className="mb-4 h-16 flex items-center justify-center overflow-hidden">
                                {views > 0 && (
                                    <RollingCounter
                                        value={views}
                                        fontSize={40}
                                        gap={2}
                                        textColor={currentTheme.primary}
                                        places={getPlaces(views)}
                                        gradientFrom="#0a0a0a"
                                    />
                                )}
                            </div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Total Visits</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

