import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";

const CardImg = (props) => {

  return (
    <div>
      <img id="player-img" src="https://www.gannett-cdn.com/-mm-/2405fadd144cc28d25162d7f78c59abb8dbf1bcb/c=0-44-949-1309/local/-/media/2018/04/20/USATODAY/USATODAY/636598335974438040-IA01-1952-MANTLE-TOPPS-1297337.JPG?width=534&height=712&fit=crop" />
      <p className="player-name">Mickey Mantle</p>
    </div>
  );
};

export default CardImg;
