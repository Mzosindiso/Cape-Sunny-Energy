import React from "react";
import '../style.css';

function signUp() {
    return (
    <>
        <section className="heading">
            <h5>Client registration</h5>
        </section>
        <form className="register">
            <label>First name:</label>
            <input type="text" name="firstname" placeholder="First name" required />
            <label>Last name:</label>
            <input type="text" name="lastname" placeholder="Last name" required />
            <label>Email:</label>
            <input type="text" name="email" placeholder="Email" required />
            <label>Business name:</label>
            <input type="text" name="businessname" placeholder="Business name" />
            <fieldset>
                <legend>VAT Registered</legend>
                <input type="checkbox" name="registration" />Yes
                <input type="checkbox" name="registration" />No
            </fieldset>
            <div className="credentials">
                <div className="creds">
                    <label>Username:</label><br />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="cred-password">
                    <label>Password:</label><br />
                    <input type="password" name="password" placeholder="Password" required />
                </div>
            </div>
            <div className="permit">
                <input type="radio" name="permission" />
                <p>I hereby grant you permission to do background check</p>
            </div>
            <div className="upload-attachments">
                <svg xmlns="http://www.w3.org/2000/svg" height="34" width="31" viewBox="0 0 448 512">
                    <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z" />
                </svg>
                <p>Attach files</p>
            </div>
            <button className="register-button">Register</button>
        </form>
    </>
    );
}

export default signUp;