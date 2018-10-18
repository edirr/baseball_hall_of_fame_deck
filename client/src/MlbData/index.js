import React, { Component } from "react";
import Axios from "axios";
import "./style.css"

class MlbData extends Component{
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
  render(){
    const { stats } = this.state;
    // console.log(stats)
    return(
      <div className="stats">
        <h1>{stats.g}</h1>
        <h1>{stats.avg}</h1>
         <h1>{stats.r}</h1>
        <h1>{stats.h}</h1>
         <h1>{stats.hr}</h1>
        <h1>{stats.rbi}</h1>
         <h1>{stats.sb}</h1>
      </div>
      )

  }
}

export default MlbData;
