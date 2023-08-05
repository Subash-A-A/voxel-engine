import { OrbitControls } from "@react-three/drei";
import { TransformControls } from "@react-three/drei";
import { useState } from "react";

const Controls = ({ selectedBlock }) => {
  const transformModes = ["translate", "rotate", "scale"];
  const [mode, setMode] = useState(transformModes[0]);

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "q":
        setMode(transformModes[0]);
        break;
      case "w":
        setMode(transformModes[1]);
        break;
      case "e":
        setMode(transformModes[2]);
        break;
    }
  });

  return (
    <>
      {selectedBlock && (
        <TransformControls
          translationSnap={0.25}
          scaleSnap={0.25}
          rotationSnap={Math.PI / 8}
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
