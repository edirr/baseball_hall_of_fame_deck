import React, { Component } from "react";
import "./style.css";
import SearchForm from "../SearchForm";
import CardList from "../CardList";

const HomePage = props => {
  return (
    <div>
      <SearchForm />
      <CardList />
    </div>
  );
};

export default HomePage;
