import './SignUp.css';
import React, { useState } from 'react';

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true); // Track whether we're showing SignUp or LogIn form

  // Handle SignUp Form Submission
  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle SignUp logic here
    console.log("Sign Up Submitted");
  };

  // Handle LogIn Form Submission
  const handleLogIn = (e) => {
    e.preventDefault();
    // Handle LogIn logic here
    console.log("Log In Submitted");
  };

  // Toggle between SignUp and LogIn form
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

      {isSignUp ? (
        <form onSubmit={handleSignUp}>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <button type="button" onClick={toggleForm}>Log In</button></p>
        </form>
      ) : (
        <form onSubmit={handleLogIn}>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Log In</button>
          <p>Don't have an account? <button type="button" onClick={toggleForm}>Sign Up</button></p>
        </form>
      )}
    </div>
  );
}

export default SignUp;
