import React, { Component } from "react";
import StatsPositionPlayer from "../StatsPositionPlayer";
import StatsPitcher from "../StatsPitcher";
import "./style.css";

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="statsContainer">
        <div>
          <StatsPitcher />
          <br/>
          <StatsPositionPlayer />
        </div>
      </div>
    );
  }
}

export default PlayerStats;
