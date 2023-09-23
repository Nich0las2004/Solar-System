import { useRef } from "react";
import venusTexture from "../../../assets/venus-texture.jpg";

import { TextureLoader, Clock } from "three";
import { useFrame } from "@react-three/fiber";

const Venus = () => {
  const venusRef = useRef();

  const clock = new Clock();

  const texture = new TextureLoader().load(venusTexture);

  useFrame(() => {
    if (venusRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const radius = 30;
      const x = radius * Math.cos(elapsedTime);
      const z = radius * Math.sin(elapsedTime);

      venusRef.current.position.set(x, 0, z);

      venusRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh position={[-30, 0, 0]} ref={venusRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[1, 64, 64]} />
    </mesh>
  );
};

export default Venus;
