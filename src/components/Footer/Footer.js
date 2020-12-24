import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => {
    setDate(new Date().getFullYear());
  };

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="FooterContainer">
      <div title=" Created By Mishka Sakhelashvili">
        <a
          href="https://www.linkedin.com/in/mikheil-sakhelashvili-2886a31aa/"
          target="_blank"
          rel="noreferrer"
        >
          M.Sakhelashvili
        </a>
      </div>
      <div title="Intellectual Property">
        <a
          href="https://en.wikipedia.org/wiki/Intellectual_property"
          target="_blank"
          rel="noreferrer"
        >
          Copyright © {date}
        </a>
      </div>
    </div>
  );
};

export default Footer;
