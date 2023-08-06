import GUI from "lil-gui";
import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

let gui = new GUI();
gui.title("Transform");

const setupGUI = (block) => {
  // Destroy old gui instance and create new one
  gui.destroy();
  gui = new GUI();
  gui.title("Transform");

  gui.add(block.current.position, "x").name("pos x").step(1);
  gui.add(block.current.position, "y").name("pos y").step(1);
  gui.add(block.current.position, "z").name("pos z").step(1);
  gui.show();
};

const TransformGUI = ({ block }) => {
  useEffect(() => {
    if (!block) {
      gui.hide();
      return;
    }

    setupGUI(block);
  }, [block]);

  return;
};

export default TransformGUI;
