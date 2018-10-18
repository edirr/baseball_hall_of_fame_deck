import React, { Component } from "react";
import "./style.css";

class StatsPitcher extends Component {
  render() {
    return (
      <div className="pitchContainer">
        <h1><strong>Pitchers</strong></h1>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>
                <abbr>GAMES</abbr>
              </th>
              <th>
                <abbr>IP</abbr>
              </th>
              <th>
                <abbr>W</abbr>
              </th>
              <th>
                <abbr>L</abbr>
              </th>
              <th>
                <abbr>S</abbr>
              </th>
              <th>
                <abbr>SO</abbr>
              </th>
              <th>
                <abbr>ERA</abbr>
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

export default StatsPitcher;
