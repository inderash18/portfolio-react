import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const TAGS = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3', 'Tailwind',
    'Next.js', 'Vite', 'Three.js', 'Git', 'GitHub', 'MongoDB', 'PostgreSQL',
    'GraphQL', 'Rest API', 'Redux', 'Zustand', 'Framer', 'Docker', 'AWS',
    'Firebase', 'Figma', 'Linux', 'Python', 'Jest', 'CI/CD', 'Webpack',
    'Babel', 'NPM', 'Yarn', 'Vercel', 'Netlify', 'VS Code', 'Agile'
];

const COLORS = [
    '#61DAFB', '#F7DF1E', '#3178C6', '#339933', '#E34F26', '#1572B6', '#06B6D4',
    '#000000', '#646CFF', '#000000', '#F05032', '#181717', '#47A248', '#336791',
    '#E10098', '#FF4103', '#764ABC', '#401306', '#0055FF', '#2496ED', '#232F3E',
    '#FFCA28', '#F24E1E', '#FCC624', '#3776AB', '#C21325', '#4B32C3', '#8DD6F9',
    '#F9DC3E', '#CB3837', '#2C8EBB', '#000000', '#00C7B7', '#007ACC', '#FFFFFF'
];

function FibonacciSphere({ count, radius = 2.5 }) {
    const tags = useMemo(() => {
        const temp = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y); // radius at y

            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;

            temp.push({
                pos: new THREE.Vector3(x * radius, y * radius, z * radius),
                word: TAGS[i % TAGS.length],
                color: COLORS[i % COLORS.length]
            });
        }
        return temp;
    }, [count, radius]);

    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {tags.map((tag, i) => (
                <Word key={i} position={tag.pos} children={tag.word} color={tag.color} />
            ))}
        </group>
    );
}

function Word({ children, position, color }) {
    const fontUrl = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.ttf'

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text
                color={color}
                fontSize={0.35}
                font={fontUrl}
                position={position}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.01}
                outlineColor="#ffffff"
                // Make text always face the camera
                quaternion={new THREE.Quaternion()}
                onUpdate={(self) => self.lookAt(0, 0, 10)}
            >
                {children}
            </Text>
        </Float>
    )
}

const TechSphere = () => {
    return (
        <div className="absolute inset-0 cursor-grab active:cursor-grabbing z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
                <fog attach="fog" args={['#050510', 5, 15]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <FibonacciSphere count={TAGS.length} />

                <TrackballControls noZoom noPan rotateSpeed={2} />
            </Canvas>
            {/* Gradient Overlay for seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

export default TechSphere;
