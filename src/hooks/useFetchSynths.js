import {useState, useEffect} from 'react';
import axios from 'axios';

const PAGINATION_LIMIT = 20;

const useFetchSynths = (query, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [synths, setSynths] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  console.log('error from usehook', error);

  useEffect(() => {
    setSynths([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    let cancel;
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}`,
      params: {
        manufacturer: query?.length >= 2 ? query : null,
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
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log('error from inside function', error.response);
        setError({
          status: error.response.status,
          text: error.response.statusText,
        });
      });

    return () => cancel();
  }, [query, page]);
  return {loading, error, synths, hasMore};
};

export default useFetchSynths;
