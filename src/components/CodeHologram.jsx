import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Icosahedron, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

const CodeSymbol = ({ text, position, color = "#06b6d4" }) => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Text
                font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3.ttf"
                fontSize={0.4}
                color={color}
                position={position}
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </Float>
    );
};

const FloatingSymbols = () => {
    // Web Dev / Full Stack Symbols
    const symbols = [
        { char: "< />", pos: [-2, 1, 0], color: "#ef4444" }, // Red
        { char: "{ }", pos: [2, -1, 1], color: "#eab308" }, // Yellow
        { char: "const", pos: [0, 2, -1], color: "#a855f7" }, // Purple
        { char: "fn()", pos: [-1.5, -2, 0], color: "#3b82f6" }, // Blue
        { char: "&&", pos: [1.5, 1.5, 0], color: "#ec4899" }, // Pink
        { char: "SQL", pos: [0, -2.5, 1], color: "#f97316" }, // Orange
        { char: "API", pos: [2.5, 0.5, -1], color: "#10b981" }, // Emerald
        { char: "[]", pos: [-2.5, 0, 1], color: "#06b6d4" }, // Cyan
        { char: "git", pos: [1, 2.5, 0], color: "#f43f5e" }, // Rose
        { char: "npm", pos: [-1, -1, 2], color: "#ef4444" }, // Red
        { char: "=>", pos: [1, -1, -2], color: "#8b5cf6" }, // Violet
    ];

    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1; // Slow orbit
        }
    });

    return (
        <group ref={groupRef} rotation={[0, 0, 0]}>
            {symbols.map((s, i) => (
                <CodeSymbol key={i} text={s.char} position={s.pos} color={s.color} />
            ))}
        </group>
    );
};

const LogicCore = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={5} rotationIntensity={0.5} floatIntensity={0.2}>
            <group>
                {/* Inner Core */}
                <Icosahedron args={[1, 1]} ref={meshRef}>
                    <meshNormalMaterial wireframe />
                </Icosahedron>

                {/* Glow Effect (Simulated with scaling mesh behind) */}
                <mesh scale={[0.9, 0.9, 0.9]}>
                    <icosahedronGeometry args={[1, 2]} />
                    <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
                </mesh>
            </group>
        </Float>
    );
}

const ParticleField = () => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(1000), { radius: 4 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <pointsMaterial
                    transparent
                    color="#ffffff"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.3}
                />
            </points>
        </group>
    )
}


const CodeHologram = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={1} />

                {/* Scene Elements */}
                <LogicCore />
                <FloatingSymbols />
                <ParticleField />

                {/* Fog for depth */}
                <fog attach="fog" args={['#050510', 5, 15]} />
            </Canvas>
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

export default CodeHologram;
