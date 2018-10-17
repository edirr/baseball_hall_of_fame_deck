import React from 'react';

const Login = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Sign Up</h3>
            <div className="box">
              <figure className="avatar">
                <img
                  alt="avatar"
                  src="https://openclipart.org/image/2400px/svg_to_png/190113/1389952697.png"
                />
              </figure>
              <form method="POST" action="/auth/signup">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                    />
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
      </div>
    </section>
  );
};

export default Login;
