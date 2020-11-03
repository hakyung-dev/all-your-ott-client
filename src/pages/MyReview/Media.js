import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import Images from './Images';

const Media = (props) => {
  const { video, images } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const imgPerPage = 1;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastImg = currentPage * imgPerPage;
  const indexOfFirstImg = indexOfLastImg - imgPerPage;
  const currentImg = images.slice(indexOfFirstImg, indexOfLastImg);

  const trailler = video ? (
    <div className="youtube">
      <iframe
        src={`https://www.youtube.com/embed/${video.key}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </div>
  ) : (
    <></>
  );

  const stills = images ? (
    <div className="img-result">
      <Images images={currentImg} />
      <div className="img-pagination">
        <Pagination
          itemPerPage={imgPerPage}
          totalItems={images.length}
          paginate={paginate}
          type={`number`}
          currentPage={currentPage}
        />
      </div>
    </div>
  ) : (
    <></>
  );

  return (
    <section className="bg-skyblue">
      <div className="container-credit">
        <div className="title">Media</div>
        {trailler}
        {stills}
      </div>
    </section>
  );
};

export default Media;
