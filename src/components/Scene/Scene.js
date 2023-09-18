import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import classes from "./Scene.module.css";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Stars />
    </Canvas>
  );
};

export default Scene;
