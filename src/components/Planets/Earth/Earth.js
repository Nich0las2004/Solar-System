import earthTexture from "../../../assets/earth-texture.jpg";

import { TextureLoader } from "three";

const Earth = () => {
  const texture = new TextureLoader().load(earthTexture);

  return (
    <mesh position={[-20, 0, 0]}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry />
    </mesh>
  );
};

export default Earth;
