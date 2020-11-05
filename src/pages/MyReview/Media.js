import React, { useState } from 'react';

import SectionSub from '../../components/SectionSub';
import Pagination from '../../components/Pagination';
import Images from './Images';

const Media = (props) => {
  const { video, images } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const imgPerPage = 1;
  const paginate = {
    up: () => setCurrentPage((prev) => (prev + 1) % images.length),
    down: () =>
      setCurrentPage((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
  };
  const currentImg = images.slice(currentPage, currentPage + 1);

  const trailer = video && (
    <div className="youtube">
      <iframe
        src={`https://www.youtube.com/embed/${video.key}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </div>
  );

  const stills = images && (
    <div className="img-result">
      <Images images={currentImg} />
      <div className="img-pagination">
        <Pagination
          itemPerPage={imgPerPage}
          totalItems={images.length}
          paginate={paginate}
          type={`slide`}
          currentPage={currentPage}
        />
      </div>
    </div>
  );

  return (
    <SectionSub color={`skyblue`} title={`Media`} body={[trailer, stills]} />
  );
};

export default Media;
