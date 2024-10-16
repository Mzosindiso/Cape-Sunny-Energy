import React from "react";
import '../style.css';

function signup() {
    return (
    <>
        <div className="signup-container">
            <section className="heading">
                <h5>Login</h5>
            </section>
            <form className="sign_in" id="loginForm" method="post">
                <label>Username:</label>
                <input type="email" name="email" placeholder="Email" id="email" required />
                <span id="errorMessage">Error</span>
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password" id="password" minLength="6" maxLength="20" required />
                <span id="errorMessage">Error</span>
                <button className="login-button" type="submit">Sign in</button>
                <div className="form-links">
                    <a href="forgot-password.html">Forgot password?</a>
                    <a href="sign-up.html">Not a member, Register</a>
                </div>
            </form>
        </div>
    </>
    );
}

export default signup;