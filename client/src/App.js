import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
import { Provider } from 'react-redux';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faSignInAlt, faUser, faUnlock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import HomePage from './HomePage';
import MyDeck from './MyDeck';
import AboutPage from './AboutPage';
import LoginForm from './LoginForm';
import SingleCard from './SingleCard';
import RulesOfInduction from './RulesOfInduction';
import NotFound from './NotFound';
import Nav from './Nav';
import SignUp from './SignUp';
import FilterSearch from './FilterSearch'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from './actions/profileActions';


import './App.css';
import 'bulma';

library.add(faHome, faEnvelope, faSignInAlt, faUser, faUnlock, faCheckCircle );


let cards= [
{
  id: 1,
name: "Jim Thome",
img: 'https://sep.yimg.com/ay/autographsforsale/jim-thome-1999-upper-deck-all-star-game-jumbo-card-29.jpg'
},
{
  id:2,
  name:"Tim Raines",
  img: 'https://cdn.sportsmemorabilia.com/sports-product-image/3-t7710628-340.jpg'
},
{
  id:3,
  name:"Ted Williams",
  img:'http://www.vintagecardprices.com/pics/2920/209436.jpg'
},
{
  id:4,
  name:"Cal Ripken Jr.",
  img:'https://images-na.ssl-images-amazon.com/images/I/71iqiInIWnL._SY606_.jpg'
},
{
  id:5,
  name:"Gary Carter",
  img:'https://i.pinimg.com/originals/59/e5/e6/59e5e68323ad5b7ad0c50c3e5f5005d3.jpg'
},
{
  id:6,
  name:"Kirby Puckett",
  img:'https://i.ebayimg.com/images/g/pRMAAOSwol5YwLYA/s-l640.jpg'
},
{
  id:7,
  name:"Phil Niekro",
  img:'https://i.pinimg.com/originals/0d/88/27/0d88273f646d57ff9d704f75511da09b.jpg'
},
{
  id:8,
  name:"Reggie Jackson",
  img:'http://www.vintagecardprices.com/pics/1913/133981.jpg'
},

]

if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO Clear current Profile

    // Redirect to login
    window.location.href = '/login'


  }
}



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);

    return (
      <Provider store={store}>
      <BrowserRouter>

      <div className="app">
        <Nav />
      <div className="pageContent">
        <Switch>
         <Route exact path="/" render={ (props) =>
          <FilterSearch cards={cards}/>
         }/>
         <Route exact path="/view/card" render={ (props) =>
          <SingleCard cards={cards}/>
         }/>
         <Route exact path="/mydeck" render={ (props) =>
          <MyDeck cards={cards}/>
         }/>
        <Route exact path="/dashboard" component={ Dashboard }/>
        <Route exact path="/about" component={ AboutPage }/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/register" component={SignUp}/>
        <Route exact path="/rules" component={RulesOfInduction}/>
        <Route component={NotFound}/>

        </Switch>
      </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
