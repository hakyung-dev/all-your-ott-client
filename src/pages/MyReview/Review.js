import React from 'react';
import { format } from 'date-fns';

import Rate from '../../components/Rate';
import ChartRadar from '../../components/Charts/Radar';

const MyReview = (props) => {
  const { rating, service, review, date, score } = props.review;

  const reviewDate = format(new Date(date), 'yyyy년 MM월 dd일');

  return (
    <section>
      <div className="container container-my-review bg-myreview">
        <div className="title">My review</div>
        <div className="review-body rowToColumn">
          <div className="myreview">
            <p className="my-rate">
              <span>평가 금액?!</span>
              <Rate type={`money`} rate={rating} />
            </p>
            <p>
              <span>감상 날짜</span>
              {reviewDate}
            </p>
            <p>
              <span>이용 서비스</span>by {service}
            </p>
            <p>
              <span>감상평</span>
              {review}
            </p>
          </div>
          <ChartRadar score={score} />
        </div>
      </div>
    </section>
  );
};

export default MyReview;
