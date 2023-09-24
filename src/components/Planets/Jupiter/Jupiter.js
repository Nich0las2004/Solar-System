import { useRef } from "react";
import jupiterTexture from "../../../assets/jupiter-texture.jpg";

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Jupiter = () => {
  const jupiterRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(jupiterTexture);

  useFrame(() => {
    if (jupiterRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const radius = 60;

      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      jupiterRef.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh position={[-50, 0, 0]} ref={jupiterRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[4, 64, 64]} />
    </mesh>
  );
};

export default Jupiter;
