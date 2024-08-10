import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProivder";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const title = "Register";
const socialTitle = "Login With Social Media";
const btnText = "SignUp ";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleRegister = () => {
        signUpWithGmail()
          .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
          })
          .catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please Provide Valid Email & Password ");
          });
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfirmPassword.value;

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match. Please provide a matching password.");
        } else {
            setErrorMessage("");
            createUser(email, password) // Correct order: email, password
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Account created successfully!");
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    console.error("Error creating user:", error.message);
                    alert(`${error.message}`);
                });
        }
    };

    return (
        <div>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSignUp}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    placeholder="Enter Your Name *"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address *"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password *"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="ConfirmPassword"
                                    id="ConfirmPassword"
                                    placeholder="Confirm Password *"
                                    required
                                />
                            </div>
                            <div>
                                {errorMessage && (
                                    <div className="error-message text-danger mb-1">
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="d-block lab-btn">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>

                        <div className="account-bottom">
                            <span className="d-blcok cate pt-10">
                                Have An Account? <Link to="/login">Login</Link>
                            </span>
                            <span className="or">
                                <span>or</span>
                            </span>
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <button className="github" onClick={handleRegister}>
                                        <i className="icofont-github"></i>
                                    </button>
                                </li>
                                <li>
                                    <a href="/" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="linkedin">
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="instagram">
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
