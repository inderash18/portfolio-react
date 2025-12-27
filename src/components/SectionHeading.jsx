import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
    return (
        <div className="mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-4"
            >
                <div className="h-[2px] w-12 bg-cyan-500"></div>
                <span className="text-cyan-400 font-mono tracking-widest text-sm uppercase">
                    {subtitle}
                </span>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white"
            >
                {title}
            </motion.h2>
        </div>
    );
};

export default SectionHeading;
