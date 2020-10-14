import React from 'react';

import defaultPoster from '../../styles/images/defaultPoster.png';

const SearchResult = (props) => {
  const { items, handleChoice } = props;

  const movieItem = items.map((movie, i) => {
    const { title, image, pubDate, link } = movie;

    const movieTitle = title.replace(/<b>/gi, '').replace(/<\/b>/gi, '');
    let poster = image;

    if (image.length === 0) {
      poster = defaultPoster;
    }

    return (
      <li key={i} className="movie">
        <img src={poster} alt="movie" className="poster" />
        <div className="info">
          <div className="title">
            <div className="year">{pubDate}</div>
            {movieTitle}
          </div>
          <div className="wrap-button">
            <a className="link" href={link}>
              자세히 보기
            </a>
            <button className="choice" onClick={() => handleChoice(movie)}>
              작성하기
            </button>
          </div>
        </div>
      </li>
    );
  });

  return <ul className="search-result">{movieItem}</ul>;
};

export default SearchResult;
