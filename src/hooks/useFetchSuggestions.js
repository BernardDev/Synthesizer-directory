import {useState, useEffect} from 'react';
import axios from 'axios';
import acceptSuggestion from '../services/acceptSuggestion';
import declineSuggestion from '../services/declineSuggestion';

const PAGINATION_LIMIT = 500;

const useFetchSuggestions = () => {
  const [suggestions, setSuggestions] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const accept = async (id) => {
    const response = await acceptSuggestion(id);
    updateSuggestions(response, response.data.data, id);
  };

  const decline = async (id) => {
    const response = await declineSuggestion(id);
    updateSuggestions(response, response.status === 200, id);
  };

  function updateSuggestions(response, responseSuccess, id) {
    if (!responseSuccess) {
      return setSuggestions(addFeedbackMessages(suggestions, id, response));
    }

    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id));
  }

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/admin`,
      params: {
        offset: 0,
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
      });
  }, []);

  return {suggestions, loading, error, accept, decline};
};

export default useFetchSuggestions;
function addFeedbackMessages(suggestions, id, response) {
  return suggestions.map((suggestion) => {
    return suggestion.id === id
      ? {
          ...suggestion,
          message: response.data.message,
          errors: response.data.errors,
        }
      : suggestion;
  });
}
