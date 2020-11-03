import React from 'react';
import indexImg from '../styles/images/index.png';

const NotFound = () => {
  return (
    <section className="container-not">
      <h1>Page Not Found</h1>
      <p>해당 페이지를 찾을 수 없습니다.</p>
      <img src={indexImg} alt="not" className="not" />
    </section>
  );
};

export default NotFound;
