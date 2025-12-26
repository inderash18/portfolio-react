import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

const MenuItem = ({ position, label, onClick, isHovered }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (isHovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group ref={meshRef} position={position} onClick={onClick}>
      <Sphere args={[0.1, 16, 16]}>
        <meshStandardMaterial
          color={isHovered ? '#00ffff' : '#ffffff'}
          emissive={isHovered ? '#00ffff' : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0}
        />
      </Sphere>
      <Text
        position={[0, -0.3, 0]}
        fontSize={0.1}
        color={isHovered ? '#00ffff' : '#ffffff'}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const CentralCore = () => {
  const coreRef = useRef();

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.005;
      coreRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={coreRef}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00ffff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Sphere>
      <Ring args={[0.6, 0.7, 32]}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          side={THREE.DoubleSide}
        />
      </Ring>
      <Ring args={[0.8, 0.9, 32]}>
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.3}
          side={THREE.DoubleSide}
        />
      </Ring>
    </group>
  );
};

const CentralHub = ({ onNavigate }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const groupRef = useRef();

  const menuItems = [
    { label: 'HOME', position: [2, 0, 0] },
    { label: 'ABOUT', position: [0, 2, 0] },
    { label: 'PROJECTS', position: [-2, 0, 0] },
    { label: 'CONTACT', position: [0, -2, 0] },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralCore />
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          position={item.position}
          label={item.label}
          onClick={() => onNavigate(item.label.toLowerCase())}
          isHovered={hoveredItem === index}
          onPointerOver={() => setHoveredItem(index)}
          onPointerOut={() => setHoveredItem(null)}
        />
      ))}
    </group>
  );
};

const HubScene = ({ onNavigate }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-6xl font-bold text-cyan-400 mb-8 glow-cyan">
          NEURAL INTERFACE
        </div>
        <div className="space-y-4">
          <button
            onClick={() => onNavigate('home')}
            className="block w-64 mx-auto px-6 py-3 bg-cyan-400/20 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/30 transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="block w-64 mx-auto px-6 py-3 bg-purple-400/20 text-purple-400 border border-purple-400/50 rounded-lg hover:bg-purple-400/30 transition-colors"
          >
            ABOUT
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="block w-64 mx-auto px-6 py-3 bg-green-400/20 text-green-400 border border-green-400/50 rounded-lg hover:bg-green-400/30 transition-colors"
          >
            PROJECTS
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="block w-64 mx-auto px-6 py-3 bg-pink-400/20 text-pink-400 border border-pink-400/50 rounded-lg hover:bg-pink-400/30 transition-colors"
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HubScene;