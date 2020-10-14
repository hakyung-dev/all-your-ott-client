import React from 'react';
import { movieStringReplace } from '../utils';

const Movie = (props) => {
  const { title, image, pubDate, userRating, director, actor } = props.movie;

  return (
    <>
      <img className="poster" src={image} alt="poster" />
      <div className="data">
        <div>{pubDate}</div>
        <div className="title">
          {title.replace(/<b>/gi, '').replace(/<\/b>/gi, '')}
        </div>
        <p className="rating">
          <span>평점</span> {userRating}/10
        </p>
        <p className="director">
          <span>감독</span> {movieStringReplace(director)}
        </p>
        <p className="actor">
          <span>배우</span> {movieStringReplace(actor)}
        </p>
      </div>
    </>
  );
};

export default Movie;
