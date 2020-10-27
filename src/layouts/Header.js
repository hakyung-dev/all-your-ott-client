import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import AuthBox from '../components/AuthBox';
import ToggleButton from '../components/ToggleButton';
import Side from './Side';
import logo from '../styles/images/logo.svg';

const Header = (props) => {
  const [side, setSide] = useState(false);

  const handleSide = () => {
    setSide(!side);
  };

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
          <Nav type={`header`} />
        </div>
        <AuthBox {...props} type={`web wrap-auth`} />
        <div className="mobile wrap-auth">
          <ToggleButton
            handleToggle={handleSide}
            type={`side`}
            isChecked={side}
            text={``}
          />
          <Side {...props} handleSide={handleSide} />
        </div>
      </div>
    </header>
  );
};

export default Header;
