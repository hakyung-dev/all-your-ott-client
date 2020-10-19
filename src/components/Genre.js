import React, { useEffect, useState } from 'react';
import { getGenreApi } from '../api';

const Genre = (props) => {
  const { type, ids } = props;
  const [allGenre, setAllGenre] = useState([]);

  useEffect(() => {
    const genres = { type: type, ids: ids };
    const callApi = async () => {
      const res = await getGenreApi(genres);
      setAllGenre(res);
    };
    callApi();
  }, [ids, type]);

  return <>{allGenre.join(', ')}</>;
};

export default Genre;
