import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ data, isLast }) => {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/5 top-0">
                {!isLast && <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/50 to-purple-500/50 w-full"></div>}
            </div>

            {/* Mobile Line */}
            <div className="md:hidden absolute left-0 top-0 w-[2px] h-full bg-white/5 ml-2"></div>

            <div className={`md:flex justify-between items-center ${data.id % 2 === 0 ? 'flex-row-reverse' : ''} mb-8 select-none group`}>
                {/* Date / Meta (Left side for odd, Right side for even) */}
                <div className="hidden md:block w-5/12 text-right">
                    <span className={`text-cyan-400 font-mono text-sm ${data.id % 2 === 0 ? 'text-left' : 'text-right'} block`}>
                        {data.date}
                    </span>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-cyan-500 bg-black z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-5/12 glass-card p-6 rounded-xl relative ml-6 md:ml-0"
                >
                    {/* Mobile Date */}
                    <span className="md:hidden text-cyan-400 font-mono text-xs mb-2 block">{data.date}</span>

                    <h3 className="text-xl font-bold text-white mb-1">{data.title}</h3>
                    <h4 className="text-sm font-semibold text-purple-400 mb-4">{data.org}</h4>

                    <ul className="list-disc list-inside space-y-2">
                        {data.desc.map((item, i) => (
                            <li key={i} className="text-gray-400 text-sm">{item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Spacer for Flex Alignment */}
                <div className="hidden md:block w-5/12"></div>
            </div>
        </div>
    );
};

export default TimelineItem;
