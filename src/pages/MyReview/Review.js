import React from 'react';
import { format } from 'date-fns';

import SectionSub from '../../components/SectionSub';
import Rate from '../../components/Rate';
import ChartRadar from '../../components/Charts/Radar';

const MyReview = (props) => {
  const { rating, service, review, date, score } = props.review;

  const reviewDate = format(new Date(date), 'yyyy년 MM월 dd일');

  const reviewBody = (
    <>
      <div className="detail my-review">
        <p className="detail-item">
          <span className="label">감상 날짜</span>
          {reviewDate}
        </p>
        <p className="detail-item">
          <span className="label">이용 서비스</span>by {service}
        </p>
        <p className="detail-item">
          <span className="label">감상평</span>
          {review}
        </p>
        <div className="detail-item">
          <span className="label">평가 금액?!</span>
          <Rate type={`money`} rate={rating} />
        </div>
      </div>
      <ChartRadar score={score} />
    </>
  );

  return (
    <SectionSub
      layout={`row rowToColumn`}
      bg={`myreview`}
      title={`My Review`}
      body={reviewBody}
    />
  );
};

export default MyReview;
