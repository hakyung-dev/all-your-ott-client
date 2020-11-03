import React from 'react';

const Images = (props) => {
  const { images } = props;

  return (
    <ul className="stills">
      {images.map((img, i) => {
        return (
          <li key={i} className="li-still">
            <img
              src={`https://image.tmdb.org/t/p/original${img.file_path}`}
              alt="still"
              className="still"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Images;
