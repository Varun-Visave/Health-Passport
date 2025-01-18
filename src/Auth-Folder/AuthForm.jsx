import React, { useState } from 'react';
import HealthPassportMainComponent from '../health-passport-main-component/HealthPassportMainComponent';

const NextComponent = () => {
    return <HealthPassportMainComponent/>;
};

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        name: '', // Only for Signup
        email: '',
        password: '',
        confirmPassword: '', // Only for Signup
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // To track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            console.log('Signup Data:', formData);
        } else {
            console.log('Login Data:', { email: formData.email, password: formData.password });
        }
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <NextComponent />; // Load the next component when form is submitted
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{isSignup ? 'Sign Up' : 'Log In'}</h1>

            {isSignup && (
                <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
            )}

            <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                // required
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                // required
            />

            {isSignup && (
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    // required
                />
            )}

            <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>

            <p style={{ textAlign: 'center' }}>
                {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                    type="button"
                    onClick={() => setIsSignup(!isSignup)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'blue',
                        textDecoration: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {isSignup ? 'Log In' : 'Sign Up'}
                </button>
            </p>
        </form>
    );
};

export default AuthForm;
