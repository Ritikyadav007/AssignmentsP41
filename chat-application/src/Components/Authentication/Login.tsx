import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='Login'>
            <div className="form-container">
                <h3>Welcome Back!</h3>
                <form className='form'>
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
                    <button type="submit" className="btn btn-primary">
                        Continue
                    </button>
                </form>
                <a id='meta-info'>Forgot Password?</a>
                <p className='meta'>Need an account ? <a id='terms'>Register</a></p>
            </div>
        </div>
    )
}
