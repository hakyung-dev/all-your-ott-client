import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import format from 'date-fns/format';
import { addReviewApi, getDetailApi } from '../../api';

import Content from '../../components/Content';
import Option from '../../components/Option';
import Rating from '../../components/Rating';
import jump from '../../styles/images/jump.png';

const ReviewForm = (props) => {
  const {
    signInUser,
    setUserReview,
    streaming,
    selectedContent,
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
  }, [selectedDate]);

  useEffect(() => {
    if (selectedContent) {
      const contentValues = {
        id: selectedContent.id,
        poster: `https://image.tmdb.org/t/p/original${selectedContent.poster_path}`,
      };
      setValues({
        ...values,
        content: contentValues,
        type: selectedContent.type,
      });
    }
  }, [selectedContent]);

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
    const { content, type, review, rating, date, service } = values;

    if (!content) {
      return setError('컨텐츠를 선택해 주세요.');
    }

    if (
      !review ||
      !rating ||
      !date ||
      !service ||
      !type ||
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

  const content = !selectedContent ? (
    <>
      <img src={jump} className="jump" alt="jump" />
      <div>리뷰 컨텐츠를 검색해주세요!</div>
    </>
  ) : (
    <>
      <Content content={selectedContent} />
    </>
  );

  return (
    <div className="sub-body">
      <div className="selected card bg-white">{content}</div>
      <form className="form-add-review" onSubmit={handleSubmit}>
        <p className="when">
          <span>언제 감상하셨나요?</span>
          <input
            type="date"
            name="date"
            onChange={handleDate}
            value={handledDate}
          />
        </p>
        <p className="by">
          <span>어떤 서비스를 통해 감상하셨나요?</span>
          <Option
            options={streaming}
            type={`service`}
            handleOption={handleChange}
          />
        </p>
        <p className="rating">
          <span>얼마의 값어치가 있는 컨텐츠 였나요?</span>
          {hover}
        </p>
        <Rating handleChange={handleChange} setHover={setHover} hover={hover} />
        <p className="text">
          <span>감상평</span>
        </p>
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
