import React, { Component } from "react";
import RulesOfInductionText from "../RulesOfInductionText";
import "./style.css";

const RulesOfInduction = props => {
  return (
    <div className="body">
      <div className="hero-rules">
        <div className="articleTitle">
          <h1>BBWAA Rules Of Induction</h1>
        </div>
      </div>
      <RulesOfInductionText />
    </div>
  );
};

export default RulesOfInduction;
