import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Mercuryorbit = () => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = Math.PI / -2;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <ringGeometry args={[1, 1.2, 64]} />
    </mesh>
  );
};

export default Mercuryorbit;
