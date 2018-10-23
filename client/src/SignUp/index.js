import React, { Component } from 'react';

import axios from 'axios';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Construct password confirmation
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered" style={{ maxWidth: '400px'}}>
            <h3 className="title has-text-grey">Sign Up</h3>
            <div className="box">
              <figure className="avatar">
                <img
                  alt="avatar"
                  src="https://openclipart.org/image/2400px/svg_to_png/190113/1389952697.png"
                />
              </figure>
              <form onSubmit={this.onSubmit}>
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      className={classnames('input is-large', {
                        'is-danger': errors.email
                      })}
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="help is-danger">{errors.email}</div>
                    )}
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon="envelope" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      className={classnames('input is-large', {
                        'is-danger': errors.password
                      })}
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="help is-danger">{errors.password}</div>
                    )}
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon="unlock" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      className={classnames('input is-large', {
                        'is-danger': errors.password2
                      })}
                      name="password2"
                      type="password"
                      placeholder="Confirm Password"
                      value={this.state.password2}
                      onChange={this.onChange}
                    />
                    {errors.password2 && (
                      <div className="help is-danger">{errors.password2}</div>
                    )}
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon="check-circle" />
                    </span>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="button is-block is-info is-large is-fullwidth"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));
