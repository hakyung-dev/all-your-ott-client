import React, { useEffect, useState } from 'react';
import { getDetailApi, getReviewApi } from '../../api';

import ContentDetail from './ContentDetail';
import Credit from './Credit';
import Review from './Review';
import Loading from '../../components/Loading';

const MyReview = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState(null);
  const [detail, setDetail] = useState(null);
  const [credit, setCredit] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const reviewRes = await getReviewApi(match.params.id);
      setReview(reviewRes.data.review);
      const content = {
        id: reviewRes.data.review.content.id,
        type: reviewRes.data.review.type,
      };
      const detailRes = await getDetailApi(content);
      if (detailRes.status === 200) {
        setDetail(detailRes.data.detail);
        setCredit(detailRes.data.credit);
        setIsLoading(false);
      } else {
        callApi();
      }
    };
    callApi();
  }, []);

  console.log(detail, credit);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ContentDetail content={detail} />
          <Review review={review} />
          <Credit
            cast={credit.cast}
            director={credit.director}
            writer={credit.writer}
          />
        </>
      )}
    </>
  );
};

export default MyReview;
