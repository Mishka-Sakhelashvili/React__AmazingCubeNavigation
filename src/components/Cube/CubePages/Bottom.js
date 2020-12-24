import React, { useState } from "react";
const Bottom = ({navigation}) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className={`bottom cubePage ${hovered}`}
      onMouseEnter={() => setHovered("CubeHovered")}
      onMouseLeave={() => setHovered(null)}
      onClick={() => navigation("resume")}
    >
      <h2>Resume</h2>
    </div>
  );
};

export default Bottom;
