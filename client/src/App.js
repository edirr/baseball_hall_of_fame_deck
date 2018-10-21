import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
import { Provider } from 'react-redux';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelopeSquare, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

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

import './App.css';
import 'bulma';

library.add(faHome, faEnvelopeSquare, faSignInAlt, faUser );


let cards= [
{
  id: 1,
name: "Eric",
img: 'https://sep.yimg.com/ay/autographsforsale/jim-thome-1999-upper-deck-all-star-game-jumbo-card-29.jpg'
},
{
  id:2,
  name:"Misha",
  img: 'https://cdn.sportsmemorabilia.com/sports-product-image/3-t7710628-340.jpg'
},
{
  id:3,
  name:"Daniel",
  img:'https://78.media.tumblr.com/5fc2ce74f233c72d040c76db9d943954/tumblr_p2xvsscybt1vyppq9o1_500.png'
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
  render() {
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
        <Route exact path="/dashboard" component={ Dashboard }/>
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
      </Provider>
    );
  }
}

export default App;
