import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


import Nav from '../Nav';
import SearchForm from '../SearchForm';
import LoginForm from '../LoginForm';
import SignUp from '../SignUp';

import './style.css';
import 'bulma';

class App extends Component {
	render() {
		const { className, ...props } = this.props;
		return (
			<div className={classnames('App', className)} {...props}>
				<Nav />
				<SearchForm />
				<LoginForm />
				<SignUp />
			</div>
		);
	}
}

export default App;
