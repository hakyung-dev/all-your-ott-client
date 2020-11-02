import React from 'react';
import { Link } from 'react-router-dom';

const AuthBox = (props) => {
  const { isAuthenticated, signInUser, type, signOut } = props;

  const handleClick = () => signOut();

  const authBox = isAuthenticated ? (
    <>
      {signInUser ? (
        <div className="user">
          안녕하세요, <span className="user-name">{signInUser.name} 님 ♥</span>
        </div>
      ) : (
        <span className="user">다시 로그인 해주세요.</span>
      )}
      <Link to="/" className="button-auth link-signout" onClick={handleClick}>
        Sign Out
      </Link>
    </>
  ) : (
    <>
      <Link to="/signin" className="button-auth link-signin">
        Sign In
      </Link>
      <Link to="/signup" className="button-auth link-signup">
        Sign Up
      </Link>
    </>
  );

  return <div className={type}>{authBox}</div>;
};

export default AuthBox;
