import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import SearchForm from '../SearchForm'
import './style.css';
import 'bulma';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames("App", className)} {...props}>
        <Nav />     
      <SearchForm />
      </div>
    );
  }
}

export default App;
