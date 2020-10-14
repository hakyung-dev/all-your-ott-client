import React from 'react';

const Pagination = (props) => {
  const { itemPerPage, totalItems, paginate, type, currentPage } = props;
  const pageButton = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    if (type === 'number') {
      pageButton.push(i);
    } else if (type === 'dot') {
      pageButton.push(`•`);
    }
  }

  const buttonList = pageButton.map((number, i) => {
    const pageNumber = i + 1;
    const effect =
      currentPage === pageNumber ? 'page-button-active' : 'page-button';
    return (
      <li key={i}>
        <a onClick={() => paginate(pageNumber)} className={effect} href="#/">
          {number}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ul className="pagination">{buttonList}</ul>
    </nav>
  );
};

export default Pagination;
