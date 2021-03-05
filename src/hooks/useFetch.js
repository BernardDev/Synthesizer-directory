import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (query, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [synths, setSynths] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // resets total array of synths when there is a new query
  useEffect(() => {
    setSynths([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    // get familiar with this way of fetching
    axios({
      method: 'GET',
      url: 'https://synthesizer-api.herokuapp.com/api/synths',
      // 'https://synthesizer-api.herokuapp.com/api/synths?key=C6T2MA6-8B54BSG-GZKKV0F-MFKC1S1&limit=20&offset=0',
      // what will my params be?
      params: {
        yearProduced: 1970 + page,
        manufacturer: query,
        limit: 500,
        key: 'C6T2MA6-8B54BSG-GZKKV0F-MFKC1S1',
      },
      //   query: query,
      //   params: {offset: page},
      cancelToken: new axios.CancelToken(
        (cancelToken) => (cancel = cancelToken)
      ),
    })
      .then((res) => {
        setSynths((prevSynths) => {
          return [
            ...prevSynths,
            // is this the correct path?
            ...res.data.synths,
          ];
        });
        // should I do something with sequelize count?
        setHasMore(res.data.synths.length > 0);
        setLoading(false);
        console.log('res.data', res.data);
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
