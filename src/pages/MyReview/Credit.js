import React from 'react';

import SectionSub from '../../components/SectionSub';
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

  const crewDirector = director && (
    <p className="detail-item">
      <span className="label">Director</span>
      {director.name}
    </p>
  );

  const crewWriter = writer && (
    <p className="detail-item">
      <span className="label">Writer</span>
      {writer.name}
    </p>
  );

  const creditBody = (
    <div className="detail">
      {crewDirector}
      {crewWriter}
      <div className="detail-item">
        <span className="label">Actors</span>
        <ul className="ul-actors">{actors}</ul>
      </div>
    </div>
  );

  return <SectionSub color={`grey`} title={`Credit`} body={creditBody} />;
};

export default Credit;
