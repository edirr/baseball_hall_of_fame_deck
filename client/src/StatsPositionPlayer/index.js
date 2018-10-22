import React, { Component } from "react";
import Axios from "axios";
import "./style.css";

class StatsPositionPlayer extends Component {
constructor(props){
  super(props);
  this.state ={
    stats: []
  }
}
componentDidMount(){
  //118258
  // const api_end = `http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='N'&name_part='mantle%25'`
  const api_end = `http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='118258'`
  const self = this;
  Axios.get(api_end)
  .then(function (response) {
    // console.log(response.data.search_player_all.queryResults.row);
    // console.log(response.data.sport_career_hitting.queryResults.row);
    let statData = response.data.sport_career_hitting.queryResults.row;
    const stats = {
      g: statData.g,
      avg: statData.avg,
      r: statData.r,
      h: statData.h,
      hr: statData.hr,
      rbi: statData.rbi,
      sb: statData.sb,
    }
    // console.log(stats)
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
    // console.log(stats)
    return (
      <div className="posContainer">
        <h1><strong>Position Player Career Totals:</strong></h1>
        <div id="info">
          <p><strong>AVG: </strong>{stats.avg}</p>
          <p><strong>G: </strong>{stats.g}</p>
          <p><strong>R: </strong>{stats.r}</p>
          <p><strong>H: </strong>{stats.h}</p>
          <p><strong>HR: </strong>{stats.hr}</p>
          <p><strong>RBI: </strong>{stats.rbi}</p>
          <p><strong>SB: </strong>{stats.sb}</p>
        </div>
      </div>
    );
  }
}

export default StatsPositionPlayer;
