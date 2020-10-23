import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../styles/images/logo.svg';

const Header = (props) => {
  const { signInUser, isAuthenticated, signOut } = props;

  const handleClick = () => signOut();

  const authBox = isAuthenticated ? (
    <>
      {signInUser ? (
        <span className="user">
          안녕하세요, <span className="user-name">{signInUser.name}</span> 님 ♥
        </span>
      ) : (
        <span className="user">다시 로그인 해주세요.</span>
      )}
      <Link to="/" className="button link-signout" onClick={handleClick}>
        Sign Out
      </Link>
    </>
  ) : (
    <>
      <Link to="/signin" className="button link-signin">
        Sign In
      </Link>
      <Link to="/signup" className="button link-signup">
        Sign Up
      </Link>
    </>
  );

  return (
    <header>
      <div className="header">
        <div className="nav">
          <Link to="/">
            <div className="to-home">
              <img src={logo} className="logo" alt="logo" />
              <div className="title">AYO</div>
            </div>
          </Link>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/review">Review</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="wrap-auth">{authBox}</div>
      </div>
    </header>
  );
};

export default Header;
