import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { addReviewApi } from '../../api';

import Search from './Search';
import Movie from '../../components/Movie';
import PageTop from '../../components/PageTop';
import Option from '../../components/Option';
import Rating from '../../components/Rating';
import jump from '../../styles/images/jump.png';

const NewReview = (props) => {
  const { signInUser, streaming } = props;
  const [values, setValues] = useState({});
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setTimeout(() => setError(''), 2000);
  }, [error]);

  const handleChoice = async (movie) => {
    setValues({ ...values, movie: movie });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { movie, review, rating, date } = values;

    if (!movie) {
      return setError('컨텐츠를 선택해 주세요.');
    }

    if (!movie || !review || !rating || !date) {
      return setError('모든 항목을 작성해주세요');
    }

    const result = await addReviewApi(signInUser._id, values);
    if (result.status === 201) {
      setIsSuccess(true);
    } else {
      setError(result.data.message);
    }
  };

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleDate = async (e) => {
    const dateISO = new Date(e.target.value).toISOString();
    setValues({ ...values, [e.target.name]: dateISO });
  };

  if (isSuccess) {
    return <Redirect to="/review" />;
  }

  const selectedMovie = !values.movie ? (
    <>
      <img src={jump} className="jump" alt="jump" />
      <div>리뷰 컨텐츠를 검색해주세요!</div>
    </>
  ) : (
    <>
      <Movie movie={values.movie} />
    </>
  );

  return (
    <>
      <PageTop
        bg={`new-review`}
        color={`basic`}
        title={`New Review`}
        subtitle={`새로운 리뷰를 작성해보세요!`}
      />
      <section className="bg-skyblue">
        <Search handleChoice={handleChoice} />
      </section>
      <section className="bg-grey">
        <div className="container-sub">
          <div className="sub-top">
            <div className="title">Add Review</div>
            <div className="description">리뷰를 완성하세요.</div>
          </div>
          <div className="sub-body-inline">
            <div className="selected card bg-white">{selectedMovie}</div>
            <form className="form-add-review" onSubmit={handleSubmit}>
              <div>
                언제 감상하셨나요?
                <input type="date" name="date" onChange={handleDate} />
              </div>
              <div>
                어떤 서비스를 통해 감상하셨나요?
                <Option
                  options={streaming}
                  type={`service`}
                  handleOption={handleChange}
                />
              </div>
              <div className="rating">
                얼마의 값어치가 있는 컨텐츠 였나요? <span>{hover}</span>
              </div>
              <Rating
                handleChange={handleChange}
                setHover={setHover}
                hover={hover}
              />
              <div>감상평 </div>
              <textarea
                className="input-create"
                name="review"
                placeholder="리뷰를 작성해주세요"
                onChange={handleChange}
                rows="4"
                cols="50"
              />
              <div className="error">{error}</div>
              <button className="submit-add" type="submit">
                등록하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewReview;
