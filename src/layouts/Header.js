import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../styles/images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="nav">
          <Link to="/">
            <div className="to-home">
              <img src={logo} className="logo" alt="logo" />
              <div className="title">AYS</div>
            </div>
          </Link>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/streaming">Streaming</Link>
              </li>
              <li>
                <Link to="/review">Review</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="wrap-auth-button">
          <Link to="/signin" className="button link-signin">
            Sign In
          </Link>
          <Link to="/signup" className="button link-signup">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
