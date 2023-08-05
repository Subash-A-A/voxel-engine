import { useRef, useState } from "react";
import VoxelCube from "./VoxelCube";
import Controls from "./Controls";

const Workspace = () => {
  const voxelGroup = useRef(null);
  const [selectedBlock, setSelectedBlock] = useState(null);

  return (
    <>
      <Controls selectedBlock={selectedBlock} />
      <group ref={voxelGroup}>
        <VoxelCube position={[0, 0, 0]} blockSetter={setSelectedBlock} />
      </group>
    </>
  );
};

export default Workspace;
