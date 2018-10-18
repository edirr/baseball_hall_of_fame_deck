import React, { Component } from "react";
import "./style.css";

class StatsPositionPlayer extends Component {
  render() {
    return (
      <div className="posContainer">
        <h1><strong>Position Players</strong></h1>
        <table className="table is-hoverable">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>
                <abbr>AVG</abbr>
              </th>
              <th>
                <abbr>G</abbr>
              </th>
              <th>
                <abbr>R</abbr>
              </th>
              <th>
                <abbr>H</abbr>
              </th>
              <th>
                <abbr>HR</abbr>
              </th>
              <th>
                <abbr>RBI</abbr>
              </th>
              <th>
                <abbr>SB</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <strong>Career</strong> <strong>Totals:</strong>
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
