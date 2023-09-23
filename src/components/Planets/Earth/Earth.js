import { useRef } from "react";
import earthTexture from "../../../assets/earth-texture.jpg";

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Earth = () => {
  const earthRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(earthTexture);

  useFrame(() => {
    if (earthRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const radius = 40;
      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      earthRef.current.position.set(x, 0, z);

      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh position={[-40, 0, 0]} ref={earthRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[1, 64, 64]} />
    </mesh>
  );
};

export default Earth;
