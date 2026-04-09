import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei';
import styles from './Model3D.module.css';

useGLTF.preload('/3dmodels/Casamoderna.glb');

function Model() {
  const { scene } = useGLTF('/3dmodels/Casamoderna.glb');
  return <primitive object={scene} scale={0.5} />;
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#C4A77D" wireframe />
    </mesh>
  );
}

interface Model3DProps {
  className?: string;
}

export function Model3D({ className }: Model3DProps) {
  return (
    <div className={`${className} ${styles.container}`}>
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'default'
        }}
        camera={{ position: [4, 3, 4], fov: 45 }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Center>
            <Model />
          </Center>
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
          <Environment preset="sunset" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Model3D;
