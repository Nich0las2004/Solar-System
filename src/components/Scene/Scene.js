import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";

import classes from "./Scene.module.css";

import Sun from "../Sun/Sun";
import Mercury from "../Planets/Mercury/Mercury";
import Venus from "../Planets/Venus/Venus";
import Earth from "../Planets/Earth/Earth";

import MercuryOrbit from "../Orbits/MercuryOrbit/MercuryOrbit";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      {/* <Sun /> */}
      <MercuryOrbit />
      <Mercury />
      <Venus />
      <Earth />
      <Stars />
      <OrbitControls minDistance={10} maxDistance={200} />
    </Canvas>
  );
};

export default Scene;
