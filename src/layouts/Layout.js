import React from 'react';

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
