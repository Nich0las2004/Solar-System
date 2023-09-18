import sunTexture from "../../assets/sun-texture.jpg";

import { TextureLoader } from "three";

const Sun = () => {
  const map = new TextureLoader().load(sunTexture);

  return (
    <mesh>
      <meshBasicMaterial map={map} />
      <sphereGeometry />
    </mesh>
  );
};

export default Sun;
