import React from "react";
import "./Navigation.css";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import Education from "./Education/Education";

const Navigation = ({ landingPage }) => {
  let content = null;

  if (landingPage === "about") {
    content = <About />;
  } else if (landingPage === "contact") {
    content = <Contact />;
  } else if (landingPage === "resume") {
    content = <Resume />;
  } else if (landingPage === "skills") {
    content = <Skills />;
  } else if (landingPage === "portfolio") {
    content = <Portfolio />;
  } else if (landingPage === "education") {
    content = <Education />;
  }

  return <> {content}</>;
};

export default Navigation;
