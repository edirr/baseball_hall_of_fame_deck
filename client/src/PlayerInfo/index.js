import React, { Component } from "react";
import Axios from "axios";
import "./style.css";

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  componentDidMount() {
    const api_end = `http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='N'&name_part='Ted Williams'`;
    const self = this;
    Axios.get(api_end)
      .then(function(response) {
        // console.log(search_player_all.queryResults.row);

        let infoData = response.data.search_player_all.queryResults.row;
        console.log(infoData);
        const info = {
          name: infoData.name_display_first_last,
          wt: infoData.weight,
          ht_feet: infoData.height_feet,
          ht_inch: infoData.height_inches,
          bats: infoData.bats,
          throws: infoData.throws,
          born: infoData.birth_date.split("T")[0],
          debut_date: infoData.pro_debut_date.split("T")[0]
        };
        console.log(info);
        self.setState({
          info: info
        });
        // console.log(info);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { info } = this.state;
    return (
      <div className="infoContainer">
        <h1>
          <strong className="name">{info.name}</strong>
        </h1>
        <hr style={{ backgroundColor: 'lightGray' }} />
        <div id="info">
          <p>
            <strong>Weight: </strong>
            {info.wt}
          </p>
          <p>
            <strong>Height: </strong>
            {info.ht_feet}
            {info.ht_inch}
          </p>
          <p>
            <strong>Bats: </strong>
            {info.bats}
          </p>
          <p>
            <strong>Throws: </strong>
            {info.throws}
          </p>
          <p>
            <strong>Born: </strong>
            {info.born}
          </p>
          <p>
            <strong>Date of pro debut: </strong>
            {info.debut_date}
          </p>
        </div>
        <hr style={{ backgroundColor: 'lightGray' }} />
      </div>
    );
  }
}

export default PlayerInfo;

{
  /*
  render() {
    const { info } = this.state;

    return (
      <div className="posContainer">
        <h1><strong>Position Players</strong></h1>
        <table class="table">
          <thead>
            <tr>

              </td>
              <td>{info.avg}</td>
              <td>{info.g}</td>
              <td>{info.r}</td>
              <td>{info.h}</td>
              <td>{info.hr}</td>
              <td>{info.rbi}</td>
              <td>{info.sb}</td>
            </tr>
*/
}
