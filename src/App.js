import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cube from "./components/Cube/Cube";
import Galaxy from "./components/Galaxy/Galaxy";
import NavPages from "./components/Navigation/Navigation"

const App = () => {
  const [landingPage, setLandingPage] = useState("home");
  const [activeNavigation, setActiveNavigation] = useState("home");

  const navigation = (page) => {
    setActiveNavigation(page);
    setLandingPage(page);
  };


  return (
    <div className="container">
      <NavPages landingPage={landingPage} />
      <Header navigation={navigation} landingPage={activeNavigation} />
      <Galaxy />
      <Cube navigation={navigation} />
      <Footer />
    </div>
  );
};

export default App;
