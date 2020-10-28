import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signUpApi } from '../../api';

const SignUp = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => setError(''), 2000);
  }, [error]);

  const emailRegex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const nameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password, passwordConfirm } = values;

    if (!email || !name || !password || !passwordConfirm) {
      return setError('모든 항목을 입력해주세요.');
    }
    if (password !== passwordConfirm) {
      return setError('비밀번호가 일치하지 않습니다.');
    }
    if (!emailRegex.test(email)) {
      return setError('이메일 형식이 유효하지 않습니다.');
    }
    if (!passwordRegex.test(password)) {
      return setError(
        '비밀번호는 8자리 이상, 숫자와 문자가 1자리 이상 포함되어야 합니다.'
      );
    }
    if (!nameRegex.test(name)) {
      return setError('이름은 최소 2자리 최대 10자리 가능합니다.');
    }

    const user = {
      email,
      name,
      password,
    };

    const result = await signUpApi(user);

    if (result) {
      if (result.status === 201) {
        setIsSuccess(true);
      } else {
        setError(result.data.message);
        setValues({});
      }
    } else {
      setError(`서버가 불안정합니다. 다시 시도해주세요.`);
    }
  };

  if (isSuccess) {
    return <Redirect to="/signin" />;
  }

  return (
    <section className="bg-signup">
      <div className="container-auth side-right">
        <div className="wrap-column">
          <h1 className="auth-title">Sign Up</h1>
          <div className="auth-description">
            And manage all your OTT Services!
          </div>
          <form className="wrap-column" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="passwordConfirm"
              placeholder="password confirm"
              onChange={handleChange}
            />
            <div className="error">{error}</div>
            <button className="button-auth submit-auth" type="submit">
              Sign Up
            </button>
          </form>
          <div className="error">
            Already have an account?{' '}
            <span>
              <Link to={`/signin`} className="link-strong">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
