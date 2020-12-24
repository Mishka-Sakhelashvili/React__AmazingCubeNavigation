import React, { useState } from "react";

const Front = ({navigation}) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className={`front cubePage ${hovered}`}
      onMouseEnter={() => setHovered("CubeHovered")}
      onMouseLeave={() => setHovered(null)}
      onClick={() => navigation("about")}
    >
      <h2>About</h2>
    </div>
  );
};

export default Front;
