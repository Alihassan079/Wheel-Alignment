import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/mini-logo.png";
import SideImg from "../../Assets/login-side.png";
import './SignIn.css';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log('Sign In: ', { email, password });
  };

  return (
    <div className="row mx-0 flex-wrap-reverse">
      {/* First Column for Form */}
      <div className="col-lg-4 d-flex justify-content-center align-items-center text-dark">
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center">
          <div className="auth-boxs">
            <div id="loginform">
              <div className="logo">
                <div className="db">
                  <img src={logo} alt="logo" />
                </div>
                <h2 className="mt-3 mb-4 fs-3">
                  Advance your knowledge with the Pro Alignment Team
                </h2>
                <p className="fw-normal fs-4 text-secondary">Login</p>
              </div>
              {/* Form */}
              <div className='row'>
                <div className='col-12'>
                  <form className="form-horizontal m-t-20 " onSubmit={handleOnSubmit}>

                    <div className="input-group mb-3">
                      <input
                        type="email"
                        id="Login-email"
                        className="form-Control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder=''
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        required
                      />
                      <label htmlFor="Login-email">
                        Email *
                      </label>
                    </div>

                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="has-val b-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder=''
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        required
                      />
                      <label htmlFor="Login-email" >
                        Password *
                      </label>
                    </div>
                    <div className="form-group text-center">
                      <div className="col-xs-12 pb-2 pt-lg-4">
                        <button className="btn btn-block btn-lg hb-btn" type="submit">
                          Sign In
                        </button>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="custom-control custom-checkbox d-flex justify-content-between">
                          <Link to="/forgot" className="">
                            <i className="bi bi-exclamation-triangle m-r-5"></i> Forgot password?
                          </Link>
                          <Link to="/signup" className="">
                            <i className="bi bi-plus-circle-fill m-r-5"></i> New Account
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Column for Image */}
      <div className="col-lg-8 px-0">
        <div className="auth-wrapper d-flex justify-content-center align-items-center">
          <img className="mw-100" src={SideImg} alt="Side visual" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;