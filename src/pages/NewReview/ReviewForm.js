import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import format from 'date-fns/format';
import { addReviewApi } from '../../api';

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
  const [handledScore, setHandledScore] = useState({
    directing: 3,
    acting: 3,
    visual: 3,
    story: 3,
    ost: 3,
  });

  useEffect(() => {
    if (selectedDate) {
      setHandledDate(selectedDate.selectedDate);
      setValues({
        date: selectedDate.selectedDate,
      });
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedContent) {
      const {
        id,
        poster_path,
        title,
        original_title,
        release_date,
        first_air_date,
        name,
        original_name,
        type,
      } = selectedContent;
      const t = title || name;
      const original = original_title || original_name;
      const year = (release_date || first_air_date).slice(0, 4);
      const contentValues = {
        id: id,
        poster: `https://image.tmdb.org/t/p/original${poster_path}`,
        title: t,
        original_title: original,
        year: year,
      };

      setValues((prevState) => ({
        ...prevState,
        content: contentValues,
        type: type,
        score: handledScore,
      }));
    }
  }, [selectedContent, handledScore]);

  useEffect(() => {
    const time = setTimeout(() => setError(''), 2000);
    return () => clearTimeout(time);
  }, [error]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleDate = (e) => {
    const formatDate = format(new Date(e.target.value), 'yyyy-MM-dd');
    setHandledDate(formatDate);
    setValues({ ...values, date: formatDate });
  };

  const handleSlide = (e) => {
    setHandledScore({ ...handledScore, [e.target.name]: e.target.value });
    setValues({
      ...values,
      score: { ...handledScore, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { content, type, review, rating, date, service, score } = values;
    if (!content) {
      return setError('컨텐츠를 선택해 주세요.');
    }

    if (
      !review ||
      !rating ||
      !date ||
      !service ||
      !type ||
      !score ||
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
    <Content content={selectedContent} />
  );

  return (
    <>
      <div className="selected card-big bg-white rowToColumn">{content}</div>
      <form className="form-add-review" onSubmit={handleSubmit}>
        <div className="form layout-row rowToColumn">
          <div className="left detail">
            <div className="detail-item detail-right">
              <span className="label-long">언제 감상하셨나요?</span>
              <input
                type="date"
                name="date"
                onChange={handleDate}
                value={handledDate}
              />
            </div>
            <p className="detail-item detail-right">
              <span className="label-long">
                어떤 서비스를 통해 감상하셨나요?
              </span>
              <Option
                options={streaming}
                type={`service`}
                handleOption={handleChange}
              />
            </p>
            <p className="detail-item">
              <span className="label-long">
                얼마의 가치가 있는 컨텐츠 였나요? {hover}
              </span>
            </p>
            <Rating
              handleChange={handleChange}
              setHover={setHover}
              hover={hover}
            />
            <p className="detail-item">
              <span className="label">감상평</span>
              <textarea
                className="input-create"
                name="review"
                placeholder="리뷰를 작성해주세요"
                onChange={handleChange}
                rows="4"
                cols="50"
              />
            </p>
          </div>
          <div className="right detail">
            <p className="detail-item detail-right">
              <span className="label-slider">감독 연출</span>
              <input
                type="range"
                name="directing"
                className="slider"
                min={0}
                max={5}
                onChange={handleSlide}
                value={handledScore.directing}
              />
              {handledScore.directing}
            </p>
            <p className="detail-item detail-right">
              <span className="label-slider">배우 연기</span>
              <input
                type="range"
                name="acting"
                className="slider"
                min={0}
                max={5}
                onChange={handleSlide}
                value={handledScore.acting}
              />
              {handledScore.acting}
            </p>
            <p className="detail-item detail-right">
              <span className="label-slider">영상미</span>
              <input
                type="range"
                name="visual"
                className="slider"
                min={0}
                max={5}
                onChange={handleSlide}
                value={handledScore.visual}
              />
              {handledScore.visual}
            </p>
            <p className="detail-item detail-right">
              <span className="label-slider">스토리</span>
              <input
                type="range"
                name="story"
                className="slider"
                min={0}
                max={5}
                onChange={handleSlide}
                value={handledScore.story}
              />
              {handledScore.story}
            </p>
            <p className="detail-item detail-right">
              <span className="label-slider">OST</span>
              <input
                type="range"
                name="ost"
                className="slider"
                min={0}
                max={5}
                onChange={handleSlide}
                value={handledScore.ost}
              />
              {handledScore.ost}
            </p>
          </div>
        </div>
        <div className="error">{error}</div>
        <button className="submit-add" type="submit">
          등록하기
        </button>
      </form>
    </>
  );
};

export default ReviewForm;
