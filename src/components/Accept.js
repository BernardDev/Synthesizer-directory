import './form.css';
import React, {useState, useEffect} from 'react';
import useFetchSuggestions from '../hooks/useFetchSuggestions';
import Suggestion from './Suggestion';
import styled from 'styled-components';
import acceptSuggestion from '../services/acceptSuggestion';

const Form = () => {
  const [page, setPage] = useState(0);
  const {suggestions, loading, hasMore, error} = useFetchSuggestions(page);

  const [displaySuggestions, setDisplaySuggestions] = useState(suggestions);
  const [displayError, setDisplayError] = useState();

  useEffect(() => {
    setDisplaySuggestions(suggestions);
  }, [suggestions]);

  // console.log(`displaySuggestions`, displaySuggestions);

  const accept = async (id) => {
    const response = await acceptSuggestion(id);
    if (response.data.data) {
      const newSuggestions = displaySuggestions.filter((suggestion) => {
        return suggestion.id !== id;
      });
      setDisplaySuggestions(newSuggestions);
    }
    setDisplayError(response.data.message);
    // show error message
    // setError()
  };

  const decline = (id) => {
    const newSuggestions = displaySuggestions.filter((suggestion) => {
      return suggestion.id !== id;
    });
    setDisplaySuggestions(newSuggestions);
  };

  function handlePageUp() {
    // if (!hasMore) return;
    setPage((prevPage) => prevPage + 1);
  }

  function handlePageDown() {
    // if (page <= 0) return;
    setPage((prevPage) => prevPage - 1);
  }

  return (
    <div>
      <SuggestionContainer>
        {displaySuggestions?.map((suggestion, index) => {
          return (
            <Suggestion
              suggestion={suggestion}
              loading={loading}
              key={index}
              decline={decline}
              accept={accept}
              displayError={displayError}
            />
          );
        })}
      </SuggestionContainer>
      <button onClick={handlePageUp}>Up</button>
      <button onClick={handlePageDown}>Down</button>
    </div>
  );
};

const SuggestionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Form;
