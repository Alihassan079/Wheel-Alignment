import React, { useState } from 'react';
import logo from "../../Assets/mini-logo.png";
import SideImg from "../../Assets/login-side.png";
import { Link } from 'react-router-dom';

const ForgotPasword = () => {

    const [userName, setUserName] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();



        console.log('Forgot Password: ', { userName });
    };


    return (
        <div className="row mx-0">
            <div className="col-md-8 px-0">
                <div className="auth-wrapper d-flex justify-content-center align-items-center">
                    <img className=" mw-100" src={SideImg} alt="Side visual" />
                </div>

                {/* <!-- Image Content --> */}
            </div>
            <div className="col-md-4 px-0 d-flex justify-content-center align-items-center text-dark">
                <div className="auth-wrapper d-flex no-block justify-content-center align-items-center">
                    <div className="auth-boxs">
                        <div id="loginform">
                            <div className="logo">
                                <div className="db">
                                    <img src={logo} alt="logo" /></div>
                                <h2 className="mt-3 fs-2 ">Advance your knowledge with the Pro Alignment Team</h2>
                                <p className="fw-normal fs-4 text-secondary">Password Remainder</p>
                            </div>
                            {/* <!-- Form --> */}
                            <div className="row">
                                <div className="col-12">
                                    <form className="form-horizontal m-t-20" onSubmit={handleOnSubmit}>



                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                id="User_name"
                                                className="form-Control"
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                                name="username"
                                                placeholder=''
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                required />
                                            <label htmlFor="User_name">
                                                Username or Email *
                                            </label>
                                        </div>

                                        <div className="form-group text-center">
                                            <div className="col-xs-12 pb-2 pt-lg-4 mt-lg-4">
                                                <button className="btn btn-block btn-lg hb-btn" type="submit">Reset</button>
                                            </div>
                                            </div>
                                            <div className="form-group row mt-2">
                                                <div className="col-md-12">
                                                    <div className="custom-control custom-checkbox d-flex justify-content-between">
                                                        <Link to="/signin" className="">
                                                            <i className="bi bi-exclamation-triangle m-r-5"></i> Login Account
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
            {/* <!-- First Column for Image --> */}
        </div>

    )
}

export default ForgotPasword