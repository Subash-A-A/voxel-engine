import { useRef } from "react";

const VoxelCube = ({ color = "#00ffff", size = 1, blockSetter, ...props }) => {
  const block = useRef();
  return (
    <mesh
      ref={block}
      scale={size}
      onClick={() => {
        blockSetter(block);
      }}
      onPointerMissed={(e) => e.type === "click" && blockSetter(null)}
      {...props}
    >
      <boxGeometry />
      <meshMatcapMaterial color={color} />
    </mesh>
  );
};

export default VoxelCube;
