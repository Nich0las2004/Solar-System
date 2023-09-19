import venusTexture from "../../../assets/venus-texture.jpg";

import { TextureLoader } from "three";

const Venus = () => {
  const texture = new TextureLoader().load(venusTexture);

  return (
    <mesh position={[-15, 0, 0]}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry />
    </mesh>
  );
};

export default Venus;
