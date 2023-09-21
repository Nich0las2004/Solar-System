import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MercuryOrbit = () => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <ringGeometry args={[10.5, 10, 64]} />
    </mesh>
  );
};

export default MercuryOrbit;
