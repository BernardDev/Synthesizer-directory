import React from 'react';
import useFetchSuggestions from '../hooks/useFetchSuggestions';
import Suggestion from './Suggestion';
import styled from 'styled-components';

const Form = () => {
  const {suggestions, loading, accept, decline, error} = useFetchSuggestions();
  return (
    <>
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
    </>
  );
};

const SuggestionContainer = styled.div`
  margin: 1rem;
  width: 100%;
  display: column;
  columns: 4;
  column-width: 320px;
  gap: 1em;
  position: relative;
`;

export default Form;
