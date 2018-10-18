import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';
import MyDeck from './MyDeck'
import AboutPage from './AboutPage';
import LoginForm from './LoginForm'
import SingleCard from './SingleCard'
import NotFound from './NotFound';
import RulesOfInduction from './RulesOfInduction';
import './App.css';
import 'bulma';

import Nav from './Nav';

import SignUp from './SignUp';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Nav />
      <div className="pageContent">
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={ AboutPage }/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/register" component={SignUp}/>
        <Route exact path="/rules" component={RulesOfInduction}/>
        <Route exact path="/view/card" component={SingleCard}/>
        <Route exact path="/mydeck" component={MyDeck}/>
        <Route component={NotFound}/>

        </Switch>
      </div>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
