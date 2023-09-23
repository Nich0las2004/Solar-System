import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const EarthOrbit = () => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <ringGeometry args={[40, 39.9, 128]} />
    </mesh>
  );
};

export default EarthOrbit;