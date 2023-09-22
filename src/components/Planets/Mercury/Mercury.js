import { useRef } from "react";
import mercuryTexture from "../../../assets/mercury-texture.jpg";

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Mercury = () => {
  const mercuryRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(mercuryTexture);

  useFrame(() => {
    if (mercuryRef.current) {
      const elapsedTime = clock.getElapsedTime();

      // Calculate the new position along the circular path
      const radius = 10; // Radius of the circular path
      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      mercuryRef.current.position.set(x, 0, z);

      mercuryRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh position={[-10, 0, 0]} ref={mercuryRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[1, 64, 64]} />
    </mesh>
  );
};

export default Mercury;
