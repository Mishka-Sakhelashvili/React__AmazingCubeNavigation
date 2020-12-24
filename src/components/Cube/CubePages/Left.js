import React, { useState } from "react";

const Left = ({navigation}) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className={`left cubePage ${hovered}`}
      onMouseEnter={() => setHovered("CubeHovered")}
      onMouseLeave={() => setHovered(null)}
      onClick={() => navigation("portfolio")}
    >
      <h2>Porffolio</h2>
    </div>
  );
};

export default Left;
