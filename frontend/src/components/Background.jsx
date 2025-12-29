import React, { useEffect, useRef } from 'react';
import Threads from './Threads';

const Background = () => {
    const blobRefs = useRef([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            blobRefs.current.forEach((blob, index) => {
                if (blob) {
                    const speed = (index + 1) * 0.5; // Staggered movement
                    const x = (clientX * speed) / 100;
                    const y = (clientY * speed) / 100;
                    blob.animate({
                        transform: `translate(${x}px, ${y}px)`
                    }, { duration: 3000, fill: "forwards" });
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-30 overflow-hidden">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]" />

            {/* Moving Blobs */}
            <div
                ref={el => blobRefs.current[0] = el}
                className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 animate-pulse"
            />
            <div
                ref={el => blobRefs.current[1] = el}
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-30 animate-pulse delay-1000"
            />
            <div
                ref={el => blobRefs.current[2] = el}
                className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] opacity-40 delay-2000"
            />

            {/* Threads Effect */}
            <div className="absolute inset-0 opacity-40">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                    color={[1, 1, 1]}
                />
            </div>
        </div>
    );
};

export default Background;
