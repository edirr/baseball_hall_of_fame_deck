import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // If you write onChange type functions with arrow
  // syntax, you don't need the .bind(this)
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Hi There!</h3>
              <p className="subtitle has-text-grey">
                Please log in to proceed.
              </p>
              <div className="box email-container">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <div className="field disabled">
                    <div className="control">
                      <input
                        className="input is-large disabled"
                        type="password"
                        placeholder="Your Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="button is-block is-info is-large is-fullwidth"
                    value="Login"
                  />
                </form>
              </div>
              <p className="has-text-grey">
                <a href="./signup">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
