import { useRef } from "react";
import uranusTexture from "../../../assets/uranus-texture.jpg"

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Saturn = () => {
  const uranusRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(uranusTexture);

  useFrame(() => {
    if (uranusRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const radius = 80;

      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      uranusRef.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh position={[-70, 0, 0]} ref={uranusRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[3, 64, 64]} />
    </mesh>
  );
};

export default Saturn;
