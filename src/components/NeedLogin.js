import React from 'react';
import { Link } from 'react-router-dom';

import jump from '../styles/images/jump.png';

const NeedLogin = (props) => {
  const { description1, description2 } = props;

  return (
    <>
      <img src={jump} className="jump" alt="jump" />
      <div>{description1}</div>
      <div>{description2}</div>
      <Link to={`/signin`} className="button link-basic">
        로그인하고 시작하기
      </Link>
    </>
  );
};

export default NeedLogin;
