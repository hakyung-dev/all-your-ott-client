import React from 'react';

import defaultPoster from '../../styles/images/defaultPoster.png';

const SearchResult = (props) => {
  const { items, handleChoice } = props;

  const contentItem = items.map((content, i) => {
    const { title, poster_path, name, release_date, first_air_date } = content;

    const contentTitle = title || name;
    const year = (release_date || first_air_date || `정보없음`).slice(0, 4);

    let poster = `https://image.tmdb.org/t/p/original${poster_path}`;

    if (!poster_path) {
      poster = defaultPoster;
    }

    return (
      <li key={i} className="movie">
        <img src={poster} alt="movie" className="poster" />
        <div className="info">
          <div className="title">
            <div className="year">{year}</div>
            {contentTitle}
          </div>
          <div className="wrap-button">
            <button className="choice" onClick={() => handleChoice(content)}>
              작성하기
            </button>
          </div>
        </div>
      </li>
    );
  });

  return <ul className="search-result">{contentItem}</ul>;
};

export default SearchResult;
