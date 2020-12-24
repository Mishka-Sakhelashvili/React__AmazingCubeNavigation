import React, { useState } from "react";

const Right = ({navigation}) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className={`right cubePage ${hovered}`}
      onMouseEnter={() => setHovered("CubeHovered")}
      onMouseLeave={() => setHovered(null)}
      onClick={() => navigation("contact")}
    >
      <h2>Contact</h2>
    </div>
  );
};

export default Right;
