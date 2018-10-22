import React, { Component } from "react";
import Axios from "axios";
import "./style.css";

class StatsPitcher extends Component {
  constructor(props){
  super(props);
  this.state ={
    stats: []
  }
}
componentDidMount(){
  //121961
  // const api_end = `http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='N'&name_part='mantle%25'`
  const api_end = `http://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='121961'`
  const self = this;
  Axios.get(api_end)
  .then(function (response) {
    // console.log(response.data.search_player_all.queryResults.row);
    // console.log(response.data.sport_career_pitching.queryResults.row);
    let statData = response.data.sport_career_pitching.queryResults.row;
    const stats = {
      g: statData.g,
      ip: statData.ip,
      w: statData.w,
      l: statData.l,
      sv: statData.sv,
      so: statData.so,
      era: statData.era,
    }
    self.setState({
      stats:stats
    });
    // console.log(stats);
  })
  .catch(function (error) {
    console.log(error);
  });

}
  render() {
     const { stats } = this.state;
    console.log(stats)
    return (

      <div className="pitchContainer">
        <h2><strong>Pitcher Career Totals:</strong></h2>
        <div id="info">
          <p><strong>GAMES: </strong>{stats.g}</p>
          <p><strong>IP: </strong>{stats.ip}</p>
          <p><strong>W: </strong>{stats.w}</p>
          <p><strong>L: </strong>{stats.l}</p>
          <p><strong>S: </strong>{stats.sv}</p>
          <p><strong>SO: </strong>{stats.so}</p>
          <p><strong>ERA: </strong>{stats.era}</p>
        </div>
      </div>
    );
  }
}


export default StatsPitcher;
