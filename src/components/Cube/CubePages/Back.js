import React, { useState } from "react";

const Back = ({navigation}) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className={`back cubePage ${hovered}`}
      onMouseEnter={() => setHovered("CubeHovered")}
      onMouseLeave={() => setHovered(null)}
      onClick={() => navigation("education")}
    >
      <h2>Education</h2>
    </div>
  );
};

export default Back;
