import React, { useContext, useEffect, useState } from "react";
import TransformGUI from "./TransformGUI";
import { BlockContext } from "../context/BlockContext";

const GlobalGUI = () => {
  const [selectedBlock, setSelectedBlock] = useContext(BlockContext);

  return <TransformGUI block={selectedBlock} />;
};

export default GlobalGUI;
