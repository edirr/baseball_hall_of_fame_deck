import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardList from './CardList';
import SearchForm from './SearchForm';
import AboutPage from './AboutPage';
import LoginForm from './LoginForm'
import SingleCard from './SingleCard'
import NotFound from './NotFound';
import './App.css';
import 'bulma';

import Nav from './Nav';
import SignUp from './SignUp'

import RulesOfInduction from './RulesOfInduction';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Nav />
      <div className="pageContent">
        <Switch>
        <Route exact path="/" component={CardList}/>
        <Route exact path="/about" component={RulesOfInduction}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/view/card" component={SingleCard}/>

        <Route component={NotFound}/>

        </Switch>
      </div>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
