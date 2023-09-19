import { useRef } from "react";
import mercuryTexture from "../../../assets/mercury-texture.jpg";

import { TextureLoader } from "three";

const Mercury = () => {
  const mercury = useRef();

  const texture = new TextureLoader().load(mercuryTexture);

  return (
    <mesh position={[-5, 0, 0]} ref={mercury}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry />
    </mesh>
  );
};

export default Mercury;
