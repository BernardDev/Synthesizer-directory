import {useState, useEffect} from 'react';
import axios from 'axios';

const PAGINATION_LIMIT = 20;

const useFetchSynths = (query, page, manufacturers) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [synths, setSynths] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // console.log('manufacturers', manufacturers);

  useEffect(() => {
    setSynths([]);
  }, [query]);

  // why on mount undefined
  // why Access not found (false)

  useEffect(() => {
    setLoading(true);
    setError(null);
    let exactMatch = manufacturers?.some((manufacturer) => {
      return manufacturer.manufacturer === query; // accepted values: Yamaha, Ya
    });
    let partialMatch = manufacturers?.some((manufacturer) => {
      return manufacturer.manufacturer?.startsWith(query); // accepted values: Yamaha, Ya
    });
    console.log(
      'exactMatch',
      exactMatch,
      'query',
      query,
      'exactMatch === false',
      exactMatch === false,
      'partial match',
      partialMatch
    );
    // handle undefined value of found on mount // works for now, just fetch
    // geen query // works for now
    // query no match //
    if (exactMatch === false && query !== '' && query !== undefined) {
      setLoading(false);
      if (!partialMatch) {
        setError({text: `${query} is not in our database, sorry ;)`});
      }
      return;
    }
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
