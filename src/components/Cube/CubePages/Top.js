import React, { useState } from "react";

const Top = ({navigation}) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className={`top cubePage ${hovered}`}
      onMouseEnter={() => setHovered("CubeHovered")}
      onMouseLeave={() => setHovered(null)}
      onClick={() => navigation("skills")}
    >
      <h2>Skills</h2>
    </div>
  );
};

export default Top;
