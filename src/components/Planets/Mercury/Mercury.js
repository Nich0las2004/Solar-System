import { useRef } from "react";
import mercuryTexture from "../../../assets/mercury-texture.jpg";

import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";

const Mercury = () => {
  const mercuryRef = useRef();

  const texture = new TextureLoader().load(mercuryTexture);

  useFrame(() => {
    if (mercuryRef.current) {
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
