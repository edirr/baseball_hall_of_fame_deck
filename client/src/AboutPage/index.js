import React, { Component } from "react";
import AboutTheHallText from "../AboutTheHallText";
import "./style.css";

const AboutPage = props => {
  return (

    <div className="body">
      <div className="hero-about">
        <div className="article-title">
          <h1>The History of the Hall of Fame</h1>
        </div>
      </div>
      <AboutTheHallText />

    </div>
  );
};


export default AboutPage;
