import { useFrame, useThree } from "@react-three/fiber";
import { useState, useRef } from "react";
import * as THREE from "three";

const VoxelCube = ({ color = "#00ffff", size = 1, blockSetter, ...props }) => {
  const block = useRef();
  const objects = [block.current];
  const { raycaster, pointer, camera, scene } = useThree();
  const geo = new THREE.BoxGeometry();
  const material = new THREE.MeshMatcapMaterial({ color: color });

  const placeVoxel = () => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(objects, false);
    if (intersects.length > 0) {
      const intersect = intersects[0];
      const normal = intersect.face.normal.divideScalar(2);
      const voxel = new THREE.Mesh(geo, material);
      voxel.position.copy(intersect.point);
      voxel.position.add(normal);
      voxel.position.round();
      objects.push(voxel);
      scene.add(voxel);
    }
  };

  return (
    <group>
      <mesh
        ref={block}
        {...props}
        scale={size}
        onClick={() => {
          blockSetter(block);
          placeVoxel();
        }}
        onPointerMissed={(e) => e.type === "click" && blockSetter(null)}
      >
        <boxGeometry />
        <meshMatcapMaterial color={color} />
      </mesh>
    </group>
  );
};

export default VoxelCube;

/**
 * {sides.map((side, index) => (
        <mesh
          ref={side.ref}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Place Block at " + side.sideName);
          }}
          onPointerEnter={(e) => {
            e.stopPropagation();
            side.ref.current.material.opacity = 0.2;
          }}
          onPointerLeave={() => {
            side.ref.current.material.opacity = 0;
          }}
          name={side.sideName}
          key={index}
          position={side.pos}
        >
          <boxGeometry />
          <meshBasicMaterial
            color={"white"}
            transparent
            opacity={0}
            depthWrite={false}
          />
        </mesh>
      ))}
 */
