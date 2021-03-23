import './form.css';
import React, {useState, useEffect} from 'react';
import useFetchSuggestions from '../hooks/useFetchSuggestions';
import Suggestion from './Suggestion';
import styled from 'styled-components';
import acceptSuggestion from '../services/acceptSuggestion';

const Form = () => {
  const [page, setPage] = useState(0);
  const {suggestions, loading, accept, error} = useFetchSuggestions(page);

  // const decline = (id) => {
  //   const newSuggestions = displaySuggestions.filter((suggestion) => {
  //     return suggestion.id !== id;
  //   });
  //   setDisplaySuggestions(newSuggestions);
  // };

  const decline = () => {
    console.log('got clicked :)');
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
        {suggestions?.map((suggestion, index) => {
          return (
            <Suggestion
              suggestion={suggestion}
              loading={loading}
              key={index}
              decline={decline}
              accept={accept}
              error={error}
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
