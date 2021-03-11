import {useState, useEffect} from 'react';
import axios from 'axios';

const PAGINATION_LIMIT = 20;

const useFetch = (query, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [synths, setSynths] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setSynths([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}`,
      params: {
        manufacturer: query,
        offset: 0 + PAGINATION_LIMIT * page,
        limit: PAGINATION_LIMIT,
        key: `${process.env.REACT_APP_API_KEY}`,
      },
      cancelToken: new axios.CancelToken(
        (cancelToken) => (cancel = cancelToken)
      ),
    })
      .then((res) => {
        setSynths((prevSynths) => {
          setHasMore(
            prevSynths.length + res.data.synths.length < res.data.count
          );
          return [...prevSynths, ...res.data.synths];
        });
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, page]);
  return {loading, error, synths, hasMore};
};

export default useFetch;
