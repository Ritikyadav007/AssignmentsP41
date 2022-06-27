import React from 'react';
import { Link } from 'react-router-dom';
import CurrentStrings from '../../i8n';
import './Login.css';

export default function Login() {
  const {
    CONTINUE,
    EMAIL_ADDRESS,
    FORGET_PASSWORD,
    NEED_ACCOUNT,
    PASSWORD,
    REGISTER,
    WELCOME_BACK,
  } = CurrentStrings;
  return (
    <div className="Login" data-testid="comp-2">
      <div className="form-container">
        <h3 data-testid="h3">{WELCOME_BACK}</h3>
        <form className="form">
          <div className="mb-3">
            <label
              htmlFor="inputEmail"
              className="form-label"
              data-testid="label"
            >
              {EMAIL_ADDRESS}
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
              {PASSWORD}
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
            {CONTINUE}
          </button>
        </form>
        <span id="meta-info" data-testid="meta">
          {FORGET_PASSWORD}
        </span>
        <p className="meta">
          {NEED_ACCOUNT}
          <span id="terms">
            <Link to="/SignUp">{REGISTER}</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
