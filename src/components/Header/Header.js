import React from "react";
import "./Header.css";

const Header = ({ navigation, landingPage }) => {
  let activeHome;
  let activeAbout;
  let activeContact;
  let activePortfolio;
  let activeResume;
  let activeEducation;
  let activeSkills;

  // const [active, setActive] = useState("home");
  if (landingPage === "home") {
    activeHome = "active";
  } else if (landingPage === "about") {
    activeAbout = "active";
  } else if (landingPage === "contact") {
    activeContact = "active";
  } else if (landingPage === "portfolio") {
    activePortfolio = "active";
  } else if (landingPage === "resume") {
    activeResume = "active";
  } else if (landingPage === "education") {
    activeEducation = "active";
  } else if (landingPage === "skills") {
    activeSkills = "active";
  }

  return (
    <div className="HeaderContainer">
      <h4 className={activeHome} onClick={() => navigation("home")}>
        Home
      </h4>
      <h4 className={activeAbout} onClick={() => navigation("about")}>
        About
      </h4>
      <h4 className={activePortfolio} onClick={() => navigation("portfolio")}>
        Portfolio
      </h4>
      <h4 className={activeContact} onClick={() => navigation("contact")}>
        Contact
      </h4>
      <h4 className={activeResume} onClick={() => navigation("resume")}>
        Resume
      </h4>
      <h4 className={activeEducation} onClick={() => navigation("education")}>
        Education
      </h4>
      <h4 className={activeSkills} onClick={() => navigation("skills")}>
        Skills
      </h4>
    </div>
  );
};

export default Header;
