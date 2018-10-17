import React, { Component } from "react";
import "bulma";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <header>
        <nav id="navBG" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a href="/">
              <img src="https://i.imgur.com/DtzwcGB.png" style={{marginLeft: '20px', height: '82px', width: '144px'}} />
            </a>
            <a class="navbar-item" href="/">
              <h2>Deck of Legends</h2>
            </a>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">Home</a>

              <a class="navbar-item">My Deck</a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Learn More</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">About the Hall</a>
                  <a class="navbar-item">Teams</a>
                  <a class="navbar-item">Rules of Induction</a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-light">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
