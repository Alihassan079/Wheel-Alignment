import React, { useState } from 'react';
import logo from "../../Assets/mini-logo.png";
import SideImg from "../../Assets/login-side.png";
import './SignUp.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');



    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{11}$/.test(phone);
    const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    const handleOnSubmit = async (e) => {
        e.preventDefault();


        setErrorMessage('');

        // Form validation
        if (!validateEmail(email)) {
            setErrorMessage('Invalid email format!');
            return;
        }
        if (!validatePhone(phone)) {
            setErrorMessage('Phone number must be 11 digits!');
            return;
        }
        if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 8 characters long and include a number.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

                const csrfToken = document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content');


        try {
            // Register the new user
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'mode': 'no-cors',

                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken, // Add CSRF token here

                    //   'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'
                    // ,'Access-Control-Allow-Methods': 'POST, OPTIONS',

                    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                },


                body: JSON.stringify({ firstName, lastName, userName, email, phone, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();


                if (errorData.errors) {
                    const errors = errorData.errors;
                    if (errors.username) {
                        setErrorMessage(errors.username[0]);
                    } else if (errors.email) {
                        setErrorMessage(errors.email[0]);
                    } else if (errors.phone_no) {
                        setErrorMessage(errors.phone_no[0]);
                    } else {
                        setErrorMessage('Registration failed. Please try again.');
                    }
                    return;
                } else {
                    setErrorMessage('Something went wrong! Please try again later.');
                }
            }

            setSuccessMessage('Registration successful!');
            setErrorMessage('');
            setFirstName('');
            setLastName('');
            setUserName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Something went wrong! Please try again later.');
        }
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
                                <p className="fw-normal fs-4 text-secondary">Sign Up</p>
                            </div>
                            {/* <!-- Form --> */}
                            <div className="row">
                                <div className="col-12">
                                    <form className="form-horizontal m-t-20" onSubmit={handleOnSubmit}>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                id="First_name"
                                                className="form-Control"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                name="firstname"
                                                placeholder=''
                                                aria-label="Firstname"
                                                aria-describedby="basic-addon1"
                                                required />
                                            <label htmlFor="First_name">
                                                First Name *
                                            </label>
                                        </div>

                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                id="Last_name"
                                                className="form-Control"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                name="lastname"
                                                placeholder=''
                                                aria-label="Lastname"
                                                aria-describedby="basic-addon1"
                                                required />
                                            <label htmlFor="Last_name">
                                                Last Name *
                                            </label>
                                        </div>
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
                                                User Name *
                                            </label>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="email"
                                                id="SignUp-email"
                                                className="form-Control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                name="email"
                                                placeholder=''
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                                required
                                            />
                                            <label htmlFor="SignUp-email">
                                                Email *
                                            </label>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="number"
                                                className="has-val b-0"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                name="phone"
                                                placeholder=''
                                                aria-label="Phone"
                                                aria-describedby="basic-addon1"
                                                required
                                            />
                                            <label htmlFor="SignUp-phone">
                                                Phone *
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
                                            <label htmlFor="SignUp-password">
                                                Password *
                                            </label>
                                        </div>

                                        <div className="input-group mb-3">
                                            <input
                                                type="password"
                                                className="has-val b-0"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                name="password"
                                                placeholder=''
                                                aria-label="Password"
                                                aria-describedby="basic-addon1"
                                                required
                                            />
                                            <label htmlFor="SignUp-password" >
                                                Confirm Password *
                                            </label>
                                        </div>
                                        {errorMessage && (
                                            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                                        )}
                                        {successMessage && (
                                            <p className="text-green-500 text-sm mt-1">{successMessage}</p>
                                        )}
                                        <div className="form-group text-center">
                                            <div className="col-xs-12 pb-2 pt-lg-2">
                                                <button className="btn btn-block btn-lg hb-btn" type="submit">Sign Up</button>
                                            </div>
                                            <p className="text-sm text-center text-gray-600 ">
                                                Already a member?{' '}
                                                <Link to="/signin" className="text-primary fw-bold hover:underline">
                                                    Sign In
                                                </Link>
                                            </p>
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

export default SignUp