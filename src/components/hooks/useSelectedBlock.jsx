import { useState } from "react";

const useSelectedBlock = () => {
  const [block, setBlock] = useState(null);

  return [block, setBlock];
};

export default useSelectedBlock;
