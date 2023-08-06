import { Grid } from "@react-three/drei/core";

const Gizmos = () => {
  return (
    <>
      <color attach={"background"} args={["#303035"]}></color>
      <Grid
        position={[0, -0.01, 0]}
        infiniteGrid
        fadeDistance={25}
        fadeStrength={2}
        sectionColor={"#202020"}
        cellColor={"#6f6f6f"}
        cellSize={0.5}
        cellThickness={0.5}
        sectionThickness={0.6}
      />
    </>
  );
};

export default Gizmos;
