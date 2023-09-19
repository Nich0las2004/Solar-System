import sunTexture from "../../assets/sun-texture.jpg";

import { TextureLoader } from "three";

const Sun = () => {
  const texture = new TextureLoader().load(sunTexture);

  return (
    <mesh>
      <meshBasicMaterial map={texture} />
      <sphereGeometry />
    </mesh>
  );
};

export default Sun;
