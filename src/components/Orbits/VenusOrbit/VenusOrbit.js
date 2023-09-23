import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const VenusOrbit = () => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <ringGeometry args={[30, 29.9, 128]} />
    </mesh>
  );
};

export default VenusOrbit;
