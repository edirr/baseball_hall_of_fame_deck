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
    console.log(stats)
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
      <div className="posContainer">
        <h1><strong>Position Players</strong></h1>
        <table class="table">
          <thead>
            <tr>
              <th>
                <strong>Career</strong>
              </th>
              <th>
                <strong>Totals</strong>
              </th>
              <th>
                <abbr title="avg">avg</abbr>
              </th>
              <th>
                <abbr title="Games">G</abbr>
              </th>
              <th>
                <abbr title="Runs">R</abbr>
              </th>
              <th>
                <abbr title="Hits">H</abbr>
              </th>
              <th>
                <abbr title="HomeRuns">HR</abbr>
              </th>
              <th>
                <abbr title="RBI">RBI</abbr>
              </th>
              <th>
                <abbr title="StolenBases">SB</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
              </th>
              <td>
              </td>
              <td>{stats.avg}</td>
              <td>{stats.g}</td>
              <td>{stats.r}</td>
              <td>{stats.h}</td>
              <td>{stats.hr}</td>
              <td>{stats.rbi}</td>
              <td>{stats.sb}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsPositionPlayer;
