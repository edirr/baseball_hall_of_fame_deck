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
    let player_id = this.props.player_id;
    return (
      <div className="statsContainer">
        <div>
          <StatsPitcher player_id={player_id} />
          <br/>
          <StatsPositionPlayer player_id={player_id} />
        </div>
      </div>
    );
  }
}

export default PlayerStats;
