import React from 'react';
import { Link } from 'react-router-dom';

import AuthBox from '../components/AuthBox';
import Nav from '../components/Nav';
import logo from '../styles/images/logo.svg';

const Side = (props) => {
  const { handleSide } = props;
  return (
    <section className="modal-side">
      <div className="back" onClick={handleSide}></div>
      <div className="modal bg-side">
        <button onClick={handleSide}>X</button>
        <AuthBox {...props} type={`modal-body`} />
        <div className="wrap">
          <Link to="/">
            <div className="home">
              <img src={logo} className="logo" alt="logo" />
              <div className="title">AYO</div>
            </div>
          </Link>
          <Nav type={`side`} />
        </div>
      </div>
    </section>
  );
};

export default Side;
