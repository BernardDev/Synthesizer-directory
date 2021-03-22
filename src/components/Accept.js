import './form.css';
import React, {useState, useEffect} from 'react';
import useFetchSuggestions from '../hooks/useFetchSuggestions';
import Suggestion from './Suggestion';
import styled from 'styled-components';
import acceptSuggestion from '../services/acceptSuggestion';

const Form = () => {
  const [page, setPage] = useState(0);
  const {suggestions, loading, hasMore, error} = useFetchSuggestions(page);

  // useEffect(() => {
  //   setAllSuggestions(suggestions);
  // }, [suggestions]);

  // const [allSuggestions, setAllSuggestions] = useState();
  // console.log(`suggestions`, suggestions);

  // get id from every suggestion

  const decline = (id) => {
    console.log(`id decline`, id);
    // const newSuggestions = allSuggestions.map((suggestion) => {
    //   if (suggestion.id === id) {
    //     // axios post request
    //     // delete this item from allSuggestions array
    //   } else {
    //     return suggestion;
    //   }
    // });
    // setAllSuggestions(newSuggestions);
  };

  const accept = async (id) => {
    console.log(`id accept`, id);
    const response = await acceptSuggestion(id);
    console.log(`response`, response);
    // const newSuggestions = allSuggestions.map((suggestion) => {
    //   if (suggestion.id === id) {
    //     const result = useAcceptSuggestion(suggestion);
    //     // axios post request
    //     // delete this item from allSuggestions array
    //   } else {
    //     return suggestion;
    //   }
    // });
    // setAllSuggestions(newSuggestions);
  };

  // const decline = (id) => {
  //   console.log('Called!', id);
  //   const newSuggestionArray = suggestions.map((suggestion) => {
  //     if (suggestion.id === id) {
  //       return {
  //         ...suggestion,
  //         score: player.score + 1,
  //       };
  //     } else {
  //       return suggestion;
  //     }
  //   });
  //   set_players(new_players_array);
  // };

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
