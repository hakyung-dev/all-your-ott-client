import React from 'react';
import { Link } from 'react-router-dom';

import jump from '../styles/images/jump.png';
import graph from '../styles/images/graph.png';

const NeedLogin = (props) => {
  const { description1, description2, type = 'jump' } = props;

  let loginImg;
  if (type === 'graph') {
    loginImg = graph;
  } else if (type === 'jump') {
    loginImg = jump;
  }

  return (
    <>
      <img src={loginImg} className={type} alt={type} />
      <div>{description1}</div>
      <div>{description2}</div>
      <Link to={`/signin`} className="button link-basic">
        로그인하고 시작하기
      </Link>
    </>
  );
};

export default NeedLogin;
