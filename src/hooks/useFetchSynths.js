import {useState, useEffect} from 'react';
import axios from 'axios';

const PAGINATION_LIMIT = 20;

const useFetchSynths = (query, page, manufacturers) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [synths, setSynths] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setSynths([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    let exactMatch = hasExactMatch(manufacturers, query);
    let partialMatch = hasPartialMatch(manufacturers, query);
    const queryPresent = isQueryPresent(query);
    if (exactMatch === false && queryPresent) {
      setLoading(false);
      if (!partialMatch) {
        setError({text: `${query} is not in our database, sorry ;)`});
      }
      return;
    }
    let cancel;
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/api/synths`,
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
      .then(updateStates(setSynths, setHasMore, setLoading))
      .catch(handleError(setError));
    // cancel previous request if new request is made while fetching
    return () => cancelRequest(cancel);
  }, [query, page, manufacturers]);
  return {loading, error, synths, hasMore};
};

function cancelRequest(cancelToken) {
  cancelToken();
}

function handleError(setError) {
  return (error) => {
    // console.log(`error`, error);
    if (axios.isCancel(error)) return;
    setError({
      status: error.response.status,
      text: error.response.statusText,
    });
  };
}

function updateStates(setSynths, setHasMore, setLoading) {
  return (res) => {
    setSynths((prevSynths) => {
      setHasMore(prevSynths.length + res.data.synths.length < res.data.count);
      return [...prevSynths, ...res.data.synths];
    });
    setLoading(false);
  };
}

function isQueryPresent(query) {
  return query !== '' && query !== undefined;
}

function hasPartialMatch(manufacturers, query) {
  return manufacturers?.some((manufacturer) => {
    return manufacturer.manufacturer?.startsWith(query);
  });
}

function hasExactMatch(manufacturers, query) {
  return manufacturers?.some((manufacturer) => {
    return manufacturer.manufacturer === query;
  });
}

export default useFetchSynths;
