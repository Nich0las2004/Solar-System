import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const NeptuneOrbit = () => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <ringGeometry args={[90, 89.9, 128]} />
    </mesh>
  );
};

export default NeptuneOrbit;
