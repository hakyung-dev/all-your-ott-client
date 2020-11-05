import React from 'react';

import Rate from '../../components/Rate';

const ContentDetail = (props) => {
  const {
    back_img,
    title,
    original_title,
    year,
    homepage,
    rating,
    poster_img,
    genres,
    overview,
  } = props.content;

  const bgStyle = {
    backgroundImage: `url(${back_img})`,
  };

  const allGenre = [];
  genres.forEach((genre, i) => {
    allGenre.push(genre.name);
  });

  return (
    <section className="bg-grey bg-detail" style={bgStyle}>
      <div className="bg-top">
        <div className="container container-content">
          <img src={poster_img} className="poster" alt="poster" />
          <div className="info">
            <div className="wrap-title">
              <h2 className="original">{original_title}</h2>
              <h1 className="title">
                {title}
                <span>{`, ${year}`}</span>
              </h1>
            </div>
            <div className="detail wrap-detail">
              <p className="detail-item">
                <span className="label">Genre</span>
                {allGenre.join(', ')}
              </p>
              <p className="detail-item">
                <span className="label">Overview</span>
                {overview}
              </p>
              {homepage && (
                <p className="detail-item">
                  <span className="label">Page</span>
                  <a href={homepage}>{homepage}</a>
                </p>
              )}
              <div className="detail-item">
                <span className="label">Rate</span>
                <Rate rate={rating} type={`circle`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDetail;
