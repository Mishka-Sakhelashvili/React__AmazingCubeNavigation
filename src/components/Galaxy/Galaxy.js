import React from "react";
import "./Galaxy.css";

const Galaxy = () => {
  return (
    <div className="GalaxyContainer">
      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
};

export default Galaxy;
