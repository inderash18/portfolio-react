import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ArrowUpRight, ShieldCheck } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, githubLink, demoLink, image }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-[450px] w-full bg-white/5 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-3xl transition-all duration-700 hover:border-white/20"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 p-10 flex flex-col pointer-events-none"
            >
                <div className="flex justify-between items-start mb-auto">
                    <div className="flex gap-2">
                        {techStack.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-[8px] font-black text-zinc-500 border border-white/5 px-3 py-1 bg-black/40 rounded-full uppercase tracking-widest">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-accent transition-all duration-700"></div>
                        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.4em]">DEPLOY_ARCHIVE</span>
                    </div>

                    <h3 className="text-4xl font-black text-white uppercase leading-none tracking-tighter group-hover:text-accent transition-colors">
                        {title}
                    </h3>

                    <p className="text-zinc-500 text-sm leading-relaxed max-w-sm opacity-60 group-hover:opacity-100 transition-opacity">
                        {description}
                    </p>
                </div>
            </div>

            {/* Links at bottom right */}
            <div
                style={{ transform: "translateZ(80px)" }}
                className="absolute bottom-10 right-10 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            >
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white hover:text-black pointer-events-auto transition-all">
                        <Github size={18} />
                    </a>
                )}
                {demoLink && (
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-accent hover:text-black pointer-events-auto transition-all">
                        <ArrowUpRight size={18} />
                    </a>
                )}
            </div>

            {/* Aesthetic highlight glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.div>
    );
};

export default ProjectCard;
