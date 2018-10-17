import React, { Component } from "react";
import "./style.css";

class PlayerInfo extends Component {
  render() {
    return (
      <div className="infoContainer">
        <p>wt. {}</p>
        <p>ht. {}</p>
        <p>bats: (L/R) {}</p>
        <p>throws: (L/R) {}</p>
        <p>born: (date) {}</p>
        <p>small paragraph about player {}</p>
      </div>
    );
  }
}

export default PlayerInfo;
