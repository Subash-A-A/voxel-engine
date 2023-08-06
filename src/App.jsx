import "./styles/Engine.css";
import Engine from "./components/Engine/Engine";
import { useState, useContext } from "react";
import { BlockContext } from "./components/context/BlockContext";
import GlobalGUI from "./components/UI/GlobalGUI";

function App() {
  const [selectedBlock, setSelectedBlock] = useState();

  return (
    <>
      <BlockContext.Provider value={[selectedBlock, setSelectedBlock]}>
        <Engine
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
        <GlobalGUI />
      </BlockContext.Provider>
    </>
  );
}

export default App;
