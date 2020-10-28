import React from 'react';
import defaultPoster from '../../styles/images/defaultPoster.png';

const Credit = (props) => {
  const { cast, director, writer } = props;

  const actors = cast.map((actor, i) => {
    const profile = actor.profile_path
      ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
      : defaultPoster;

    return (
      <li key={i} className="actor">
        <img src={profile} alt="profile" className="profile" />
        <div className="actor-name">{actor.name}</div>
        <div className="actor-character">{actor.character}</div>
      </li>
    );
  });

  const crewDirector = director ? (
    <p className="crew">
      <span>Director</span>
      {director.name}
    </p>
  ) : (
    <></>
  );

  const crewWriter = writer ? (
    <p className="crew">
      <span>Writer</span>
      {writer.name}
    </p>
  ) : (
    <></>
  );

  return (
    <section className="bg-grey">
      <div className="container-credit">
        <div className="title">Credit</div>
        {crewDirector}
        {crewWriter}
        <p>
          <span>Actors</span>
        </p>
        <div className="actors">
          <ul className="ul-actors">{actors}</ul>
        </div>
      </div>
    </section>
  );
};

export default Credit;
