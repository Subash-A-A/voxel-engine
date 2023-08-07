import { Canvas } from "@react-three/fiber";
import Workspace from "./Workspace";
import Gizmos from "./Gizmos";

const Engine = () => {
  return (
    <section>
      <Canvas dpr={[1, 2]} camera={{ position: [5, 4, 5] }}>
        <Gizmos />
        <Workspace voxelColor={"#fff"} />
      </Canvas>
    </section>
  );
};

export default Engine;
