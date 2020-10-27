import React, { useEffect, useState } from 'react';
import { isSameMonth } from 'date-fns';
import { Link } from 'react-router-dom';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { removeReviewApi } from '../../api';

import Toggle from '../../components/ToggleButton';
import DateNumber from '../../components/DateNumber';

const MonthList = (props) => {
  const { user, review, day, setUserReview } = props;
  const [list, setList] = useState([]);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const reviewList = [];
    if (review) {
      review.forEach((item) => {
        const reviewDate = new Date(item.date);
        if (isSameMonth(reviewDate, day)) {
          reviewList.push(item);
        }
      });
    }
    setList(reviewList);
  }, [review, day]);

  const handlemode = () => {
    setMode(!mode);
  };

  const modeEffect = mode ? ` shake-slow` : ``;

  const sortList = list.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const sortReview = sortList.map((item, i) => {
    const { content, date, _id } = item;
    const theDay = new Date(date);

    const handleDel = async (e) => {
      const userId = {
        userId: user._id,
      };
      const result = await removeReviewApi(_id, userId);
      if (result.status === 200) {
        setUserReview(result.data.review);
      }
    };
    const isDelButton = mode ? (
      <button className={`review-del${modeEffect}`} onClick={handleDel}>
        <AiOutlineMinusCircle />
      </button>
    ) : (
      <div className="review-del"></div>
    );
    return (
      <li className="li-month" key={i}>
        <Link className="li-link" to={`/review/${_id}`}>
          <DateNumber theDay={theDay} type={`monthly`} />
          <div className="wrap-title">
            <div className="original-title">{content.original_title}</div>
            <div className="small-title">
              {content.title} <span className="year">{content.year}</span>
            </div>
          </div>
        </Link>
        {isDelButton}
      </li>
    );
  });

  return (
    <div className="container-wide container-month">
      <div className="wrap-month-button">
        <Link to={`/review/new`} className="button link-new">
          새로운 리뷰 작성하기
        </Link>
        <Toggle
          handleToggle={handlemode}
          type={`del`}
          isChecked={mode}
          text={``}
        />
      </div>
      <ul className="ul-month">
        {list.length > 0 ? (
          sortReview
        ) : (
          <li className="li-month">
            이번 달 리뷰가 없습니다. 새로운 리뷰를 작성해 보세요!
          </li>
        )}
      </ul>
    </div>
  );
};

export default MonthList;
