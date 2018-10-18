import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bulma";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <header>
        <nav id="navBG" className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/">
              <img src="https://i.imgur.com/DtzwcGB.png" style={{marginLeft: '20px', height: '82px', width: '144px'}} />
            </Link>
            <span className="navbar-item">
              <h2>Deck of Legends</h2>
            </span>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">

              <Link to="/" className="navbar-item"><FontAwesomeIcon icon="home"/>Home</Link>

              <Link to="/mydeck" className="navbar-item">My Deck</Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Learn More</a>


                <div class="navbar-dropdown">
                  <Link to="/about" class="navbar-item">About the Hall</Link>
                  <Link to="/rules" class="navbar-item">Rules of Induction</Link>

                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-light">
                    Sign up
                  </Link>
                  <Link to="/login" className="button is-light"><FontAwesomeIcon icon="sign-in-alt"/>Log in</Link>
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
