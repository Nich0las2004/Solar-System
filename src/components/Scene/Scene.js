import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";

import classes from "./Scene.module.css";

import Sun from "../Sun/Sun";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Sun />
      <Stars />
      <OrbitControls
        minDistance={2}
        maxDistance={5}
      />
    </Canvas>
  );
};

export default Scene;