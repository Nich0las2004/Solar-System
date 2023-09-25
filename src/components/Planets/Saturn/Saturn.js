import { useRef } from "react";
import saturnTexture from "../../../assets/saturn-texture.jpg";

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Saturn = () => {
  const saturnRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(saturnTexture);

  useFrame(() => {
    if (saturnRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const radius = 70;

      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      saturnRef.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh position={[-60, 0, 0]} ref={saturnRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[3.8, 64, 64]} />
    </mesh>
  );
};

export default Saturn;
