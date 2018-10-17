import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardImg from "../CardImg";
import "./style.css";

const CardList = props => {
  return (
    <div className="card-list">
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
      <Link to="/view/card"><CardImg className="card-img" /></Link>
    </div>
  );
};

export default CardList;
