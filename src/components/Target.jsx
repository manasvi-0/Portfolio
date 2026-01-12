import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

// public files are served at root: use leading slash
const ASSET = "/models/kamdo.glb";

const Target = (props) => {
  const gltf = useGLTF(ASSET);
  const targetRef = useRef();

  useEffect(() => {
    if (!targetRef.current || !gltf?.scene) return;
    if (!targetRef.current.position) targetRef.current.position = { x: 0, y: 0, z: 0 };
    const anim = gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
    return () => anim.kill();
  }, [gltf]);

  if (!gltf || !gltf.scene) return null;

  return (
    <group ref={targetRef} {...props} dispose={null}>
      <primitive object={gltf.scene} scale={[0.7, 0.7, 0.7]} />
    </group>
  );
};

// preload the asset so it's fetched early
useGLTF.preload(ASSET);

export default Target;