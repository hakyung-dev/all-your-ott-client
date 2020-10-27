import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ type }) => {
  return (
    <nav className={`nav-${type}`}>
      <ul className="nav-list">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/review">Review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
