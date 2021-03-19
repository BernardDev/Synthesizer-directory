import {useState, useEffect} from 'react';
import axios from 'axios';

const PAGINATION_LIMIT = 2;

const useFetchSuggestions = (page) => {
  const [suggestions, setSuggestions] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  //   const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    console.log('do i get here');
    setLoading(true);
    setError(null);
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/admin`,
      params: {
        offset: 0 + PAGINATION_LIMIT * page,
        limit: PAGINATION_LIMIT,
      },
    })
      .then((res) => {
        setSuggestions(res.data.suggestions);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`error`, error);
        setError({
          status: error.response.status,
          text: error.response.statusText,
        });
        console.log('error', error);
        // @todo: return error.response
      });
  }, [page]);

  return {suggestions, loading, error};
};

export default useFetchSuggestions;
