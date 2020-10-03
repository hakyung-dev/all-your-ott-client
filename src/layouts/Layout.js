import React from 'react';

import '../styles/index.scss';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
