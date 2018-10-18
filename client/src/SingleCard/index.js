import React, { Component } from "react";
import PlayerStats from "../PlayerStats";
import PlayerInfo from '../PlayerInfo'
import "./style.css";

class SingleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="frontAndBack">
          <div className="imgColumn">
            <img src="https://i.imgur.com/IaFEKkj.jpg" />
            <h4 className="playerName">{/*img component*/}</h4>
          </div>
          <div className="detailsColumn">
            <div className="cardInfoContainer">
              <PlayerInfo />
            </div>
            <div className="cardStatsContainer">
              <PlayerStats />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
