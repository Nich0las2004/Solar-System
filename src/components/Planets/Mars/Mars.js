import { useRef } from "react";
import marsTexture from "../../../assets/mars-texture.jpg";

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Mars = () => {
  const marsRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(marsTexture);

  useFrame(() => {
    if (marsRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const radius = 50;

      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      marsRef.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh position={[-50, 0, 0]} ref={marsRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[1, 64, 64]} />
    </mesh>
  );
};

export default Mars;
