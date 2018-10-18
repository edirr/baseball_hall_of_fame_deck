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
        <h1><strong>Pitchers</strong></h1>
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
                <abbr title="Games">Games</abbr>
              </th>
              <th>
                <abbr title="InningsPitched">IP</abbr>
              </th>
              <th>
                <abbr title="Won">W</abbr>
              </th>
              <th>
                <abbr title="Lost">L</abbr>
              </th>
              <th>
                <abbr title="Saves">SV</abbr>
              </th>
              <th>
                <abbr title="StrikeOuts">SO</abbr>
              </th>
              <th>
                <abbr title="ERA">ERA</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
              </th>
              <td>
              </td>
              <td>{stats.g}</td>
              <td>{stats.ip}</td>
              <td>{stats.w}</td>
              <td>{stats.l}</td>
              <td>{stats.sv}</td>
              <td>{stats.so}</td>
              <td>{stats.era}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsPitcher;
