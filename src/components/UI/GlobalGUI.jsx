import React, { useContext, useEffect, useState } from "react";
import TransformGUI from "./TransformGUI";
import { BlockContext } from "../context/BlockContext";
import ColorPickerGUI from "./ColorPickerGUI";
import GUI from "lil-gui";

const gui = new GUI();
const GlobalGUI = () => {
  const [selectedBlock, setSelectedBlock] = useContext(BlockContext);
  return (
    <>
      <TransformGUI block={selectedBlock} />
      <ColorPickerGUI gui={gui} />
    </>
  );
};

export default GlobalGUI;
