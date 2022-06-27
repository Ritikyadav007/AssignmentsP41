import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import CurrentStrings from '../../i8n';
import './SignUp.css';

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.tar);
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
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {NAME}
              <input type="name" className="form-control" id="name" required />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail1" className="form-label">
              {EMAIL_ADDRESS}
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                ref={emailRef}
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
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
                ref={passwordRef}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              {CONFIRM_PASS}
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                ref={confirmPassRef}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$"
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            {CONTINUE}
          </button>
        </form>
        <span id="meta-info">
          <Link to="/Login">{HAVE_ACCOUNT}</Link>
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
