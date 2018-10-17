import React, { Component } from "react";
import { Link } from "react-router-dom"
import "bulma";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <header>
        <nav id="navBG" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <Link to="/">
              <img src="https://i.imgur.com/DtzwcGB.png" style={{marginLeft: '20px', height: '82px', width: '144px'}} />
            </Link>
            <span class="navbar-item">
              <h2>Deck of Legends</h2>
            </span>

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
              <Link to="/" class="navbar-item">Home</Link>

              <Link to="/mydeck" class="navbar-item">My Deck</Link>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Learn More</a>

                <div class="navbar-dropdown">
                  <Link to="/about" class="navbar-item">About the Hall</Link>
                  <a class="navbar-item">Teams</a>
                  <a class="navbar-item">Rules of Induction</a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <Link to="/register" class="button is-light">
                    Sign up
                  </Link>
                  <Link to="/login" class="button is-light">Log in</Link>
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
