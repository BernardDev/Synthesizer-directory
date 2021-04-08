import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import acceptSuggestion from '../services/acceptSuggestion';
import declineSuggestion from '../services/declineSuggestion';
import useToken from '../context/store';

const PAGINATION_LIMIT = 500;

const useFetchSuggestions = () => {
  const {token} = useToken();
  localStorage.setItem('token', token);

  const [suggestions, setSuggestions] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const accept = async (id) => {
    const response = await acceptSuggestion(id, token);
    updateSuggestions(response, response.data.data, id);
  };

  const decline = async (id) => {
    const response = await declineSuggestion(id, token);
    updateSuggestions(response, response.status === 200, id);
  };

  function updateSuggestions(response, responseSuccess, id) {
    if (!responseSuccess) {
      return setSuggestions(addFeedbackMessages(suggestions, id, response));
    }

    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id));
  }

  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/suggestions`,
      params: {
        offset: 0,
        limit: PAGINATION_LIMIT,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        // console.log(`res`, res);
        setSuggestions(res.data.suggestions);
        setLoading(false);
      })
      .catch((error) => {
        window.alert('You need to be an approved admin');
        history.push('/admins');
        console.log(`error`, error.response.data.message);
        setError({
          status: error.response.status,
          text: error.response.data.message,
        });
      });
  }, [history, token]);

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
