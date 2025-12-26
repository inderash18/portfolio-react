import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
    const ref = useRef();
    const count = 1500;

    const positions = React.useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, []);

    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.3}
            />
        </Points>
    );
};

const FloatingCore = () => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#333"
                    roughness={0.1}
                    metalness={1}
                    distort={0.4}
                    speed={2}
                    transparent
                    opacity={0.8}
                />
            </Sphere>
        </Float>
    );
};

const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#007aff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#5856d6" />

                <ParticleField />
                <FloatingCore />

                <Environment preset="city" />
            </Canvas>
            <div className="bg-mask"></div>
        </div>
    );
};

export default ThreeBackground;
