import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className="Login" data-testid="comp-2">
      <div className="form-container">
        <h3 data-testid="h3">Welcome Back!</h3>
        <form className="form">
          <div className="mb-3">
            <label
              htmlFor="inputEmail"
              className="form-label"
              data-testid="label"
            >
              Email address
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                data-testid="input"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label">
              Password
              <input
                type="password"
                className="form-control"
                id="inputPassword1"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            data-testid="button"
          >
            Continue
          </button>
        </form>
        <span id="meta-info" data-testid="meta">
          Forgot Password?
        </span>
        <p className="meta">
          Need an account ?{' '}
          <span id="terms">
            <Link to="/SignUp">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
