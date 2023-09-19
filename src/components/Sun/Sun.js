import sunTexture from "../../assets/sun-texture.jpg";

import { TextureLoader } from "three";

const Sun = () => {
  const texture = new TextureLoader().load(sunTexture);

  return (
    <mesh>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[5, 64, 64]} />
    </mesh>
  );
};

export default Sun;
