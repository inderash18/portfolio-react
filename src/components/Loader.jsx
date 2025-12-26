import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-12"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Futuristic Spinner */}
                        <div className="relative w-32 h-32 mb-12">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-t-2 border-accent rounded-full opacity-60"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-b-2 border-purple-500 rounded-full opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xl font-black text-white">{Math.floor(progress)}%</span>
                            </div>
                        </div>

                        {/* Status Messages */}
                        <div className="text-center space-y-4">
                            <motion.div
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-[10px] font-black text-accent uppercase tracking-[1em]"
                            >
                                Initializing OS_Core
                            </motion.div>
                            <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-accent"
                                    initial={{ x: '-100%' }}
                                    animate={{ x: `${progress - 100}%` }}
                                />
                            </div>
                            <div className="flex justify-between w-full text-[8px] font-bold text-zinc-700 uppercase tracking-widest">
                                <span>Nexus_Ready</span>
                                <span>Signal_Sync</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background Text */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                        <div className="text-[30rem] font-black text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                            SYSTEM BOOT
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
