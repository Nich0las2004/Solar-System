import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const UranusOrbit = () => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <ringGeometry args={[80, 79.9, 128]} />
    </mesh>
  );
};

export default UranusOrbit;
