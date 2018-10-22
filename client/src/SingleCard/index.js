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
    const self = this;
    // console.log(self.props.cards[0].img)
    // const id = this.props.cards.map((card)=>{
    //   return card.id
    // });
    const {id} = self.props
    return (
      <div className="cardContainer">
        <div className="frontAndBack">
          <div className="imgColumn">

            <img src={self.props.cards[2].img} />
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
