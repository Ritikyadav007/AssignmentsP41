import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className="SignUp" data-testid="comp-1">
      <div className="form-container">
        <h3>Create an account</h3>
        <Avatar
          size={100}
          src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
        />
        <p>Choose Profile</p>
        <form className="form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
              <input type="name" className="form-control" id="name" required />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail1" className="form-label">
              Email address
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ '
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
                pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Confirm Password
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/"
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </form>
        <span id="meta-info">Already have a account</span>
        <p className="meta">
          By registering you agree to Messenger's{' '}
          <span id="terms">Terms of Service</span> and{' '}
          <span id="terms">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
