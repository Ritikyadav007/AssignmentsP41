import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';
import CurrentStrings from '../../i8n';
import './SignUp.css';

export default function SignUp() {
  const [error, setError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    AND,
    CHOOSE_PROFILE,
    CONFIRM_PASS,
    CONTINUE,
    CREATE_ACCOUNT,
    EMAIL_ADDRESS,
    HAVE_ACCOUNT,
    META,
    NAME,
    PASSWORD,
    POLICY,
    TERMS,
  } = CurrentStrings;
  const { signUp } = useAuth();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  const onSubmit = async (data: any) => {
    if (data.password !== data.confirmPass) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      await signUp(data.email, data.password);
      navigate('/login');
    } catch {
      setError('Failed to SignUp');
    }
  };

  return (
    <div className="SignUp" data-testid="comp-1">
      <div className="form-container">
        <h3>{CREATE_ACCOUNT}</h3>
        <Avatar
          size={100}
          src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
        />
        <p>{CHOOSE_PROFILE}</p>
        {error && <p className="error">{error}</p>}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {NAME}
              <input
                type="name"
                className="form-control"
                id="name"
                {...register('name', { required: true })}
              />
            </label>
            {errors.name && <p className="error">Please enter the name</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail1" className="form-label">
              {EMAIL_ADDRESS}
              <input
                type="text"
                className="form-control"
                id="inputEmail1"
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </label>
            {errors.email && (
              <p className="error">
                Email should contain the '@' and '.' symbol.
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label">
              {PASSWORD}
              <input
                type="password"
                className="form-control"
                id="inputPassword1"
                {...register('password', {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
            </label>
            {errors.password && (
              <p className="error">
                Password should have 1 Capital, 1 small letter and should be
                6-15 characters long.
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              {CONFIRM_PASS}
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                {...register('confirmPass', {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
            </label>
            {errors.confirmPass && (
              <p className="error">Please enter the password entered above.</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            {CONTINUE}
          </button>
        </form>
        <span id="meta-info">
          <Link to="/login">{HAVE_ACCOUNT}</Link>
        </span>
        <p className="meta">
          {META}
          <span id="terms">{TERMS}</span> {AND}
          <span id="terms">{POLICY}</span>.
        </p>
      </div>
    </div>
  );
}
