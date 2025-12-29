import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

const BrainParticles = (props) => {
    const ref = useRef();
    // Generate random points in a sphere
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#06b6d4"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const NeuralBrain = () => {
    return (
        <div className="absolute inset-0 z-0">
            {/* Canvas Container */}
            <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
                <fog attach="fog" args={['#050510', 2.5, 4]} />
                <ambientLight intensity={0.5} />
                <BrainParticles />
            </Canvas>
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none" />
        </div>
    );
};

export default NeuralBrain;
