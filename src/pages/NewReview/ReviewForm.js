import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import format from 'date-fns/format';
import { addReviewApi } from '../../api';

import Movie from '../../components/Movie';
import Option from '../../components/Option';
import Rating from '../../components/Rating';
import jump from '../../styles/images/jump.png';

const ReviewForm = (props) => {
  const {
    signInUser,
    setUserReview,
    streaming,
    selectedMovie,
    selectedDate,
  } = props;
  const [error, setError] = useState('');
  const [values, setValues] = useState({});
  const [handledDate, setHandledDate] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      setHandledDate(selectedDate.selectedDate);
      setValues({ ...values, date: selectedDate.selectedDate });
    }

    if (selectedMovie) {
      setValues({ ...values, movie: selectedMovie });
    }
  }, [selectedMovie]);

  useEffect(() => {
    setTimeout(() => setError(''), 2000);
  }, [error]);

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleDate = async (e) => {
    const formatDate = format(new Date(e.target.value), 'yyyy-MM-dd');
    setHandledDate(formatDate);
    setValues({ ...values, date: formatDate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { movie, review, rating, date, service } = values;

    if (!movie) {
      return setError('컨텐츠를 선택해 주세요.');
    }

    if (
      !movie ||
      !review ||
      !rating ||
      !date ||
      !service ||
      service === 'none'
    ) {
      return setError('모든 항목을 작성해주세요');
    }

    const result = await addReviewApi(signInUser._id, values);
    if (result.status === 201) {
      setUserReview(result.data.review);
      setIsSuccess(true);
    } else {
      setError(result.data.message);
    }
  };

  if (isSuccess) {
    return <Redirect to="/review" />;
  }

  const movie = !selectedMovie ? (
    <>
      <img src={jump} className="jump" alt="jump" />
      <div>리뷰 컨텐츠를 검색해주세요!</div>
    </>
  ) : (
    <>
      <Movie movie={selectedMovie} />
    </>
  );

  return (
    <div className="sub-body-inline">
      <div className="selected card bg-white">{movie}</div>
      <form className="form-add-review" onSubmit={handleSubmit}>
        <div>
          언제 감상하셨나요?
          <input
            type="date"
            name="date"
            onChange={handleDate}
            value={handledDate}
          />
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
        <Rating handleChange={handleChange} setHover={setHover} hover={hover} />
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
  );
};

export default ReviewForm;
