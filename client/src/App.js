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

import './App.css';
import 'bulma';

library.add(faHome, faEnvelopeSquare, faSignInAlt, faUser );


let cards= [
{
  id: 1,
name: "Eric",
},
{
  id:2,
  name:"Misha",
},
{
  id:3,
  name:"Daniel",
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
        <FilterSearch cards={cards} />
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
      </Provider>
    );
  }
}

export default App;
