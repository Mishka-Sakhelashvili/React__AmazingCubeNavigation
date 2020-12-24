import React from "react";
import "./Cube.css";
import Front from "./CubePages/Front";
import Back from "./CubePages/Back";
import Top from "./CubePages/Top";
import Bottom from "./CubePages/Bottom";
import Left from "./CubePages/Left";
import Right from "./CubePages/Right";

const Cube = ({navigation}) => {
   
  return (
    <div className="wrap">
      <div className="cube">
        <Front navigation={navigation} />
        <Back navigation={navigation} />
        <Top navigation={navigation} />
        <Bottom navigation={navigation} />
        <Left navigation={navigation} />
        <Right navigation={navigation} />
      </div>
    </div>
  );
};

export default Cube;
