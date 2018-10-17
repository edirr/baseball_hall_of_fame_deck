import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma';

import Nav from './Nav';
import LoginForm from './LoginForm';
import SignUp from './SignUp'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<LoginForm />
				<SignUp />
			</div>
		);
	}
}

export default App;
