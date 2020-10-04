import React from 'react';

import '../styles/index.scss';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const { children, signInUser, isAuthenticated, signOut } = props;

  return (
    <>
      <Header
        signInUser={signInUser}
        isAuthenticated={isAuthenticated}
        signOut={signOut}
      />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
