import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";

import classes from "./Scene.module.css";

import Sun from "../Sun/Sun";

import Mercury from "../Planets/Mercury/Mercury";
import Venus from "../Planets/Venus/Venus";
import Earth from "../Planets/Earth/Earth";
import Mars from "../Planets/Mars/Mars";
import Jupiter from "../Planets/Jupiter/Jupiter";
import Saturn from "../Planets/Saturn/Saturn";

import MercuryOrbit from "../Orbits/MercuryOrbit/MercuryOrbit";
import VenusOrbit from "../Orbits/VenusOrbit/VenusOrbit";
import EarthOrbit from "../Orbits/EarthOrbit/EarthOrbit";
import MarsOrbit from "../Orbits/MarsOrbit/MarsOrbit";
import JupiterOrbit from "../Orbits/JupiterOrbit/JupiterOrbit";
import SaturnOrbit from "../Orbits/SaturnOrbit/SaturnOrbit";
import UranusOrbit from "../Orbits/UranusOrbit/UranusOrbit"

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Sun />

      <MercuryOrbit />
      <Mercury />

      <VenusOrbit />
      <Venus />

      <EarthOrbit />
      <Earth />

      <MarsOrbit />
      <Mars />

      <JupiterOrbit />
      <Jupiter />

      <SaturnOrbit />
      <Saturn />

      <UranusOrbit />

      <Stars />
      <OrbitControls minDistance={20} maxDistance={200} />
    </Canvas>
  );
};

export default Scene;
