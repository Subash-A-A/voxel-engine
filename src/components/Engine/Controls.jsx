import { Html, OrbitControls } from "@react-three/drei";
import { TransformControls } from "@react-three/drei";
import { useRef, useState } from "react";

const Controls = ({ selectedBlock, blockSetter }) => {
  const transformModes = ["translate", "rotate", "scale"];
  const [mode, setMode] = useState(transformModes[0]);

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "q":
        blockSetter(null);
        break;
      case "w":
        setMode(transformModes[0]);
        break;
      case "e":
        setMode(transformModes[1]);
        break;
      case "r":
        setMode(transformModes[2]);
        break;
    }
  });

  return (
    <>
      {selectedBlock && (
        <TransformControls
          translationSnap={1}
          scaleSnap={1}
          rotationSnap={Math.PI / 4}
          object={selectedBlock}
          mode={mode}
          size={0.5}
        />
      )}
      <OrbitControls makeDefault />
    </>
  );
};

export default Controls;
