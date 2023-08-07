import GUI from "lil-gui";
import { useEffect, useState } from "react";

const ColorPickerGUI = ({ gui }) => {
  const prop = {
    color: "#ffffff",
  };
  const [color, setColor] = useState(prop.color);
  useEffect(() => {
    const folder = gui.addFolder("Color Picker");
    folder.addColor(prop, "color").onChange((e) => {
      setColor(e);
    });
  }, []);
};

export default ColorPickerGUI;
