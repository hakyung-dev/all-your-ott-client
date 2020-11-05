import React from 'react';
import defaultPoster from '../styles/images/defaultPoster.png';

import Genre from './Genre';

const Content = (props) => {
  const {
    title,
    name,
    poster_path,
    release_date,
    first_air_date,
    type,
    overview,
    genre_ids,
  } = props.content;

  const contentTitle = title || name;
  const year = (release_date || first_air_date).slice(0, 4);

  let poster = `https://image.tmdb.org/t/p/original${poster_path}`;

  if (poster_path.length === 0) {
    poster = defaultPoster;
  }

  return (
    <>
      <img className="poster" src={poster} alt="poster" />
      <div className="data detail">
        <div>{year}</div>
        <div className="title">{contentTitle}</div>
        <p className="detail-item">
          <span className="label">Genre</span>
          <Genre ids={genre_ids} type={type} />
        </p>
        <p className="detail-item">
          <span className="label">Overview</span> {overview}
        </p>
      </div>
    </>
  );
};

export default Content;
