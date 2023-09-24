import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const JupiterOrbit = () => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <ringGeometry args={[60, 59.9, 128]} />
    </mesh>
  );
};

export default JupiterOrbit;
