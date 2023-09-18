import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import classes from "./Scene.module.css";

import Sun from "../Sun/Sun";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Sun />

      {/* displaying stars  */}

      <Stars />
    </Canvas>
  );
};

export default Scene;
