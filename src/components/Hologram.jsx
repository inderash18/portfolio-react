import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Icosahedron, MeshWobbleMaterial } from '@react-three/drei';

const HologramCore = () => {
    const coreRef = useRef();
    const outerRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        coreRef.current.rotation.y = t * 0.5;
        coreRef.current.rotation.z = t * 0.3;
        outerRef.current.rotation.y = -t * 0.2;
        outerRef.current.rotation.x = t * 0.1;
    });

    return (
        <group>
            {/* Inner Core */}
            <mesh ref={coreRef}>
                <icosahedronGeometry args={[2, 15]} />
                <MeshDistortMaterial
                    color="#00f2ff"
                    emissive="#00f2ff"
                    emissiveIntensity={0.5}
                    distort={0.4}
                    speed={2}
                    roughness={0}
                />
            </mesh>

            {/* Middle Wireframe */}
            <mesh ref={outerRef}>
                <icosahedronGeometry args={[2.5, 2]} />
                <meshStandardMaterial
                    color="#7000ff"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#7000ff"
                    emissiveIntensity={1}
                />
            </mesh>

            {/* Outer Glow Halo */}
            <mesh>
                <sphereGeometry args={[3, 32, 32]} />
                <meshBasicMaterial
                    color="#00f2ff"
                    transparent
                    opacity={0.05}
                    wireframe
                />
            </mesh>
        </group>
    );
};

const Hologram = () => {
    return (
        <div className="w-full h-[500px] flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7000ff" />
                <HologramCore />
            </Canvas>
        </div>
    );
};

export default Hologram;
