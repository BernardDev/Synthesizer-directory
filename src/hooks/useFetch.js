import {useState, useEffect} from 'react';
import axios from 'axios';

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
      url: 'https://synthesizer-api.herokuapp.com/api/synths',
      params: {
        manufacturer: query,
        offset: 0,
        limit: 500,
        key: 'C6T2MA6-8B54BSG-GZKKV0F-MFKC1S1',
      },
      cancelToken: new axios.CancelToken(
        (cancelToken) => (cancel = cancelToken)
      ),
    })
      .then((res) => {
        setSynths((prevSynths) => {
          return [...prevSynths, ...res.data.synths];
        });
        setHasMore(res.data.count.length > 0);
        setLoading(false);
        // console.log('data', res.data);
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
