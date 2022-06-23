import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './SignUp.css'

export default function SignUp() {
    return (
        <div className='SignUp'>
            <div className="form-container">
                <h3>Create an account</h3>
                <Avatar size={100} src='https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png' />
                <p>Choose Profile</p>
                <form className='form'>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">
                            Name
                        </label>
                        <input
                            type="name"
                            className="form-control"
                            id="inputname"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail1"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword1"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputName"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Continue
                    </button>
                </form>
                <a id='meta-info'>Already have a account</a>
                <p className='meta'>By registering you agree to Messenger's <a id='terms'>Terms of Service</a> and <a id='terms'>Privacy Policy</a>.</p>
            </div>
        </div>
    );
}
