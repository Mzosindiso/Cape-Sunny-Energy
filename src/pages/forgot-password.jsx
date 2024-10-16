import React from "react";
import '../style.css';
import React, { useState } from "react";

//Validating the email address before sending a password reset link
function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        try {
            const response = await fetch('http://localhost:3001/api/reset-password', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert('Password reset email sent. Please check your inbox.');
            } else {
                const data = await response.json();
                setError(data.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <section className="heading">
                <h5>Reset password</h5>
            </section>
            <form className="sign_in" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="Enter your email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <div className="reset-button">
                    <button type="button" id="cancel">Cancel</button>
                    <button type="submit" id="reset">Reset password</button>
                </div>
            </form>
        </>
    )
}

export default ForgotPassword;
