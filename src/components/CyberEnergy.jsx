import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

const ParticleRing = () => {
    const ref = useRef();
    // Generate points in a sphere shell (ring-like effect)
    const [points] = useState(() => random.inSphere(new Float32Array(3000), { radius: 3 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#06b6d4"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
};

const AnimatedSphere = () => {
    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
            <Sphere args={[1.3, 64, 64]} >
                <MeshDistortMaterial
                    color="#0ea5e9"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.9}
                    emissive="#082f49"
                    emissiveIntensity={0.2}
                />
            </Sphere>
        </Float>
    )
}

const CyberEnergy = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                {/* Lighting */}
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 10, 7]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -5, -5]} intensity={1.5} color="#06b6d4" />
                <pointLight position={[5, -5, 5]} intensity={0.5} color="#ec4899" />

                {/* Objects */}
                <AnimatedSphere />
                <ParticleRing />
            </Canvas>
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

export default CyberEnergy;
