import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signInApi } from '../../api';

const SignIn = (props) => {
  const { authorize } = props;
  const [values, setValues] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => setError(''), 2000);
  }, [error]);

  const emailRegex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      return setError('모든 항목을 입력해 주세요.');
    }
    if (!emailRegex.test(email)) {
      return setError('메일 형식이 유효하지 않습니다.');
    }

    const user = {
      email,
      password,
    };

    const result = await signInApi(user);

    if (result.status === 200) {
      localStorage.setItem('token', result.data.token);
      authorize();
    } else {
      setError(result.data.message);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-wide bg-signin side-left">
      <section className="wrap-column">
        <h1 className="auth-title">Sign In</h1>
        <div className="page-description">Welcome Back!</div>
        <form className="wrap-column container-auth" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <div className="error">{error}</div>
          <button className="button submit" type="submit">
            Sign In
          </button>
        </form>
        <div>
          {`Don't have any account? `}
          <span>
            <Link to={`/signup`} className="link-strong">
              Sign Up
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
