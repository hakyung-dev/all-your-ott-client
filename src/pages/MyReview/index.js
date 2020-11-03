import React, { useEffect, useState } from 'react';
import { getDetailApi, getReviewApi } from '../../api';
import { useHistory } from 'react-router-dom';

import ContentDetail from './ContentDetail';
import Credit from './Credit';
import Review from './Review';
import Media from './Media';
import Loading from '../../components/Loading';

const MyReview = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState(null);
  const [detail, setDetail] = useState(null);
  const [credit, setCredit] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const callApi = async () => {
      const reviewRes = await getReviewApi(match.params.id);
      setReview(reviewRes.data.review);
      if (reviewRes.status !== 201) {
        return history.push('../notfound');
      }

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
  }, [match.params.id]);

  return (
    <>
      {isLoading ? (
        <div className="container-loading">
          <Loading />
        </div>
      ) : (
        <>
          <ContentDetail content={detail} />
          <Review review={review} />
          {detail.video || detail.images ? (
            <Media video={detail.video} images={detail.images} />
          ) : (
            <></>
          )}
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
