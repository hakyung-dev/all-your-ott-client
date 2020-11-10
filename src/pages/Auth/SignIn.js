import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signInApi } from '../../api';
require('dotenv').config();

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

    if (result) {
      if (result.status === 200) {
        localStorage.setItem('token', result.data.token);
        authorize();
      } else {
        setError(result.data.message);
      }
    } else {
      setError(`서버가 불안정합니다. 다시 시도해주세요.`);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    setValues({
      email: process.env.REACT_APP_SAMPLE_EMAIL,
      password: process.env.REACT_APP_SAMPLE_PASSWORD,
    });
  };

  return (
    <section className="bg-signin">
      <div className="container-auth side-left">
        <div className="wrap-column">
          <h1 className="auth-title">Sign In</h1>
          <div className="auth-description">Welcome Back!</div>
          <form className="wrap-column" onSubmit={handleSubmit}>
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
            <button className="button-auth submit-auth" type="submit">
              Sign In
            </button>
            <div className="sample">
              <div className="sample-description">
                만약 가입 과정이 번거로우시다면, 아래 버튼을 클릭하여 SAMPLE
                USER로 서비스를 체험해보세요.
              </div>
              <button
                className="button submit-auth-sample"
                onClick={handleClick}
                type="submit"
              >
                SAMPLE USER로 체험하기
              </button>
            </div>
          </form>
          <div className="error">
            {`Don't have any account? `}
            <span>
              <Link to={`/signup`} className="link-strong">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
