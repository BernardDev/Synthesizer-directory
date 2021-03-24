import {useState, useEffect} from 'react';
import axios from 'axios';
import acceptSuggestion from '../services/acceptSuggestion';
import declineSuggestion from '../services/declineSuggestion';

const PAGINATION_LIMIT = 500;

const useFetchSuggestions = (page) => {
  const [suggestions, setSuggestions] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [hasMore, setHasMore] = useState(true);

  //   setHasMore(prevSynths.length + res.data.synths.length < res.data.count);
  //   return [...prevSynths, ...res.data.synths];
  // });

  const accept = async (id) => {
    const response = await acceptSuggestion(id);
    console.log(`response.data.data`, response.data);
    if (response.data.data) {
      const newSuggestions = suggestions.filter((suggestion) => {
        return suggestion.id !== id;
      });
      setSuggestions(newSuggestions);
    } else {
      const newSuggestions = suggestions.map((suggestion) => {
        if (suggestion.id === id) {
          return {
            ...suggestion,
            message: response.data.message,
            errors: response.data.errors,
          };
        } else {
          return suggestion;
        }
      });
      setSuggestions(newSuggestions);
    }
  };

  const decline = async (id) => {
    const response = await declineSuggestion(id);
    const newSuggestions = suggestions.filter((suggestion) => {
      return suggestion.id !== id;
    });
    setSuggestions(newSuggestions);
  };

  useEffect(() => {
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
        // console.log(`hasMore deep in`, hasMore);
        setSuggestions(res.data.suggestions);
        setLoading(false);
        setHasMore((prevSuggestions) => {
          return (
            prevSuggestions.length + res.data.suggestions.length <
            res.data.count
          );
        });
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

  return {suggestions, loading, error, accept, decline};
};

export default useFetchSuggestions;
