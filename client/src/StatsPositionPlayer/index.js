import React, { Component } from "react";
import "./style.css";

class StatsPositionPlayer extends Component {
  render() {
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
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsPositionPlayer;
