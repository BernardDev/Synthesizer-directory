import './form.css';
import './accept.css';
import React, {useState} from 'react';
import useFetchSuggestions from '../hooks/useFetchSuggestions';
import Suggestion from './Suggestion';
import styled from 'styled-components';

const Form = () => {
  const [page, setPage] = useState(0);
  const {suggestions, loading, accept, decline, error} = useFetchSuggestions(
    page
  );

  function handlePageUp() {
    // if (!hasMore) return;
    setPage((prevPage) => prevPage + 1);
  }

  function handlePageDown() {
    // if (page <= 0) return;
    setPage((prevPage) => prevPage - 1);
  }

  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div``;

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
