import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Sparkles, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

const GyroRing = ({ radius, color, speed, rotX = 0, rotY = 0, rotZ = 0 }) => {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * speed * 0.5;
            ref.current.rotation.y += delta * speed * 0.5;
            ref.current.rotation.z += delta * speed;
        }
    });

    return (
        <group rotation={[rotX, rotY, rotZ]}>
            <mesh ref={ref}>
                <torusGeometry args={[radius, 0.015, 16, 100]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={2}
                    toneMapped={false}
                />
            </mesh>
        </group>
    );
};

const EnhancedOrb = () => {
    const wireframeRef = useRef();

    useFrame((state, delta) => {
        if (wireframeRef.current) {
            wireframeRef.current.rotation.y -= delta * 0.1;
            wireframeRef.current.rotation.z += delta * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group>
                {/* 1. Unstable Plasma Core */}
                <Sphere args={[0.8, 64, 64]}>
                    <MeshDistortMaterial
                        color="#fbbf24"
                        emissive="#d97706"
                        emissiveIntensity={2}
                        roughness={0.1}
                        metalness={1}
                        distort={0.4}
                        speed={3}
                        transparent
                        opacity={0.9}
                    />
                </Sphere>

                {/* 2. Glass Halo */}
                <Sphere args={[1.0, 32, 32]}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.4}
                        opacity={0.3}
                        transparent
                        roughness={0}
                        ior={1.5}
                        thickness={0.5}
                    />
                </Sphere>

                {/* 3. Tech Wireframe Shell */}
                <Sphere ref={wireframeRef} args={[1.8, 24, 24]}>
                    <meshBasicMaterial
                        color="#818cf8" // Indigo
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </Sphere>

                {/* 4. Gyroscopic Rings */}
                <GyroRing radius={2.2} color="#06b6d4" speed={0.4} rotX={1} /> {/* Cyan */}
                <GyroRing radius={2.5} color="#c084fc" speed={0.3} rotY={1} /> {/* Purple */}
                <GyroRing radius={2.8} color="#f472b6" speed={0.2} rotZ={1} /> {/* Pink */}

                {/* 5. Energy Particles */}
                <Sparkles
                    count={150}
                    scale={6}
                    size={2}
                    speed={0.4}
                    opacity={0.5}
                    color="#e2e8f0"
                />
            </group>
        </Float>
    );
};

const CosmicGlobe = () => {
    return (
        <div className="w-full h-full min-h-[400px] relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                {/* Lighting to make metals shine */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -5, -10]} intensity={2} color="#3b82f6" />

                {/* The Main Object */}
                <EnhancedOrb />

                {/* Background Glow */}
                <fog attach="fog" args={['#020205', 5, 20]} />
            </Canvas>
        </div>
    );
};

export default CosmicGlobe;
