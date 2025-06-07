import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere 
      ref={sphereRef} 
      args={[1, 64, 64]} 
      scale={2}
      position={[0, 0, 0]}
    >
      <MeshDistortMaterial 
        color="#0073FF" 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.5}
        metalness={0.9}
      />
    </Sphere>
  );
};

const NetworkNodes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const createNodes = () => {
    const nodes = [];
    const count = 20;
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.5 + Math.random() * 0.5;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      const size = 0.02 + Math.random() * 0.04;
      
      nodes.push(
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[size, 8, 8]} />
          <meshBasicMaterial color="#00E0E1" />
        </mesh>
      );
    }
    
    return nodes;
  };

  return <group ref={groupRef}>{createNodes()}</group>;
};

const HeroScene: React.FC = () => {
  return (
    <Canvas className="canvas-container">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00E0E1" />
      <AnimatedSphere />
      <NetworkNodes />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default HeroScene;