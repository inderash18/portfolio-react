import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Float, Sphere, Ring, Box, Text, Environment, Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const HolographicGrid = () => {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
      gridRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={gridRef}>
      {/* Main Grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[50, 50, 50, 50]} />
        <meshBasicMaterial
          color="#00ffff"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Vertical Grids */}
      <mesh position={[-10, 0, 0]}>
        <planeGeometry args={[20, 20, 10, 10]} />
        <meshBasicMaterial
          color="#ff00ff"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
      <mesh position={[10, 0, 0]}>
        <planeGeometry args={[20, 20, 10, 10]} />
        <meshBasicMaterial
          color="#00ff00"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
};

const RotatingRings = () => {
  const ringsRef = useRef();

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.01;
      ringsRef.current.children.forEach((ring, index) => {
        ring.rotation.x += 0.005 * (index + 1);
        ring.rotation.y += 0.003 * (index + 1);
      });
    }
  });

  return (
    <group ref={ringsRef}>
      {[1, 2, 3, 4].map((i) => (
        <Ring
          key={i}
          args={[i * 2, i * 2 + 0.1, 64]}
          position={[0, 0, -i * 2]}
        >
          <meshBasicMaterial
            color={i % 2 === 0 ? "#00ffff" : "#ff00ff"}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </Ring>
      ))}
    </group>
  );
};

const FloatingDataPanels = () => {
  const panelsRef = useRef();

  useFrame((state) => {
    if (panelsRef.current) {
      panelsRef.current.children.forEach((panel, index) => {
        panel.position.y += Math.sin(state.clock.getElapsedTime() + index) * 0.005;
        panel.rotation.y += 0.01;
      });
    }
  });

  return (
    <group ref={panelsRef}>
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          args={[1, 1.5, 0.1]}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <meshStandardMaterial
            color="#ffffff"
            emissive={new THREE.Color().setHSL(Math.random(), 0.7, 0.3)}
            emissiveIntensity={0.2}
            transparent
            opacity={0.7}
          />
        </Box>
      ))}
    </group>
  );
};

const ParticleField = () => {
  const ref = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const VolumetricLights = () => {
  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ff00ff" />
      <pointLight position={[0, 10, -10]} intensity={1} color="#00ff00" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        color="#ffffff"
        castShadow
      />
    </>
  );
};

const FloatingCore = () => {
  const coreRef = useRef();

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += 0.005;
      coreRef.current.rotation.y += 0.01;
      coreRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
    }
  });

  return (
    <group ref={coreRef}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.5, 64, 64]} position={[0, 0, -10]}>
          <MeshDistortMaterial
            color="#ffffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            roughness={0}
            metalness={1}
            distort={0.2}
            speed={1}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting Elements */}
      <Ring args={[2, 2.1, 32]} position={[0, 0, -10]}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </Ring>
      <Ring args={[3, 3.1, 32]} position={[0, 0, -10]}>
        <meshBasicMaterial
          color="#ff00ff"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Ring>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <fog attach="fog" args={['#000000', 30, 100]} />

        <VolumetricLights />

        <ParticleField />
        <HolographicGrid />
        <RotatingRings />
        <FloatingDataPanels />
        <FloatingCore />

        <Environment preset="night" />
      </Canvas>
      <div className="bg-mask"></div>
    </div>
  );
};

export default ThreeBackground;
