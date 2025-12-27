import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name, level }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-sm text-gray-300">{name}</span>
                <span className="font-mono text-xs text-cyan-400">{level}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                />
            </div>
        </div>
    );
};

export default SkillBadge;
