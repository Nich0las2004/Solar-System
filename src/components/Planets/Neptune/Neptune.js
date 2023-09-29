import { useRef } from "react";
import neptuneTexture from "../../../assets/neptune-texture.jpg"

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Neptune = () => {
  const neptuneRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(neptuneTexture);

  useFrame(() => {
    if (neptuneRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const radius = 90;

      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      neptuneRef.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh position={[-80, 0, 0]} ref={neptuneRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[2.8, 64, 64]} />
    </mesh>
  );
};

export default Neptune;
