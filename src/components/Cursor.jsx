import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
    const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
            <motion.div
                className="cursor-glow"
                animate={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
            />
        </>
    );
};

export default Cursor;
