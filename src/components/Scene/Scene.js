import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";

import classes from "./Scene.module.css";

import Sun from "../Sun/Sun";
import Mercury from "../Planets/Mercury/Mercury";
import Venus from "../Planets/Venus/Venus";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Sun />
      <Mercury />
      <Venus />
      <Stars />
      <OrbitControls minDistance={10} maxDistance={200} />
    </Canvas>
  );
};

export default Scene;
