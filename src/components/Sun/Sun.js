import { useRef } from "react";
import sunTexture from "../../assets/sun-texture.jpg";

import { TextureLoader } from "three";

const Sun = () => {
  const sunRef = useRef();

  const texture = new TextureLoader().load(sunTexture);

  return (
    <mesh ref={sunRef}>
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[10, 64, 64]} />
    </mesh>
  );
};

export default Sun;
