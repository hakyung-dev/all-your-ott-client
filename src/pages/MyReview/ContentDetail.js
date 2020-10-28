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

  const isHomepage = homepage ? (
    <p className="genre">
      <span>Page</span>
      <a href={homepage}>{homepage}</a>
    </p>
  ) : (
    <></>
  );

  const allGenre = [];
  genres.map((genre, i) => {
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
                <span>{year}</span>
              </h1>
            </div>
            <p className="genre">
              <span>Genre</span>
              {allGenre.join(', ')}
            </p>
            <p className="overview">
              <span>Overview</span>
              {overview}
            </p>
            {isHomepage}
            <p className="rate">
              <span>Rate</span>
              <Rate rate={rating} type={`circle`} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDetail;
