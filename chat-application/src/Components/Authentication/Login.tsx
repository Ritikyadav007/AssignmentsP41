import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="Login">
      <div className="form-container">
        <h3>Welcome Back!</h3>
        <form className="form">
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email address
              <input type="email" className="form-control" id="inputEmail" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label">
              Password
              <input
                type="password"
                className="form-control"
                id="inputPassword1"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </form>
        <span id="meta-info">Forgot Password?</span>
        <p className="meta">
          Need an account ? <span id="terms">Register</span>
        </p>
      </div>
    </div>
  );
}
