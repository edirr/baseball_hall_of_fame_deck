import React, { Component } from "react";
import "./style.css";

class StatsPitcher extends Component {
  render() {
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
                <abbr title="Saves">S</abbr>
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
