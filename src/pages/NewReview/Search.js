import React, { useState } from 'react';
import { searchContentApi } from '../../api';

import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';
import SearchResult from './SearchResult';
import stand from '../../styles/images/stand.png';

const Search = (props) => {
  const { handleChoice } = props;
  const [keyword, setKeyword] = useState({ query: '' });
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const moviePerPage = 7;

  const handleSearchChange = (e) => {
    setKeyword({ query: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (keyword.query.length === 0) {
      return setError('검색어를 입력하세요.');
    }

    setIsLoading(true);
    const res = await searchContentApi(keyword);
    setSearchList(res);
    setIsLoading(false);

    if (res.length < 1) {
      setError('검색결과가 없습니다.');
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastMovie = currentPage * moviePerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
  const currentMovie = searchList.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="container-sub">
      <div className="sub-top">
        <div className="title">Search</div>
        <div className="description">리뷰할 컨텐츠를 검색하세요.</div>
      </div>
      <div className="sub-body page-search">
        <form className="form-search" onSubmit={handleSearch}>
          <input
            className="input-search"
            type="text"
            name="title"
            onChange={handleSearchChange}
            placeholder="제목을 검색하세요."
          />
          <button className="submit-search" type="submit">
            검색
          </button>
        </form>
        <section className="container-result">
          {isLoading ? (
            <div className="search-result">
              <Loading />
            </div>
          ) : searchList.length > 0 ? (
            <>
              <SearchResult items={currentMovie} handleChoice={handleChoice} />
              <Pagination
                itemPerPage={moviePerPage}
                totalItems={searchList.length}
                paginate={paginate}
                type={`dot`}
                currentPage={currentPage}
              />
            </>
          ) : (
            <div className="card bg-white no-result">
              {error ? (
                <div className="error">{error}</div>
              ) : (
                <>
                  <img alt="stnad" src={stand} />
                  <div>컨텐츠를 검색해보세요.</div>
                </>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Search;
