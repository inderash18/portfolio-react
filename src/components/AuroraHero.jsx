import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

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
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const AuroraHero = () => {
    return (
        <div className="absolute inset-0 -z-30 overflow-hidden bg-[#020205]">

            {/* Top Gradient Mesh */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[50%] bg-[#4c1d95] rounded-full blur-[120px] opacity-20 animate-pulse delay-700" />
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0e7490] rounded-full blur-[120px] opacity-10 animate-pulse" />

            {/* Bottom Horizon Glow (Primary Feature) */}
            <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[120%] h-[400px] bg-gradient-to-t from-[#7e22ce]/30 via-[#3b82f6]/10 to-transparent blur-[80px]" />

            {/* Fine Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Starfield for subtle texture */}
            <div className="absolute inset-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                </Canvas>
            </div>

            {/* Glass Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020205_90%)] pointer-events-none" />

        </div>
    );
};

export default AuroraHero;
