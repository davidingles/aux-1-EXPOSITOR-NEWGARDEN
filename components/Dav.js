/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/6D david.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.00, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["david"].geometry}
          material={materials["a1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["david_1"].geometry}
          material={materials.a2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["david_2"].geometry}
          material={materials.a3}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/6D david.gltf");
