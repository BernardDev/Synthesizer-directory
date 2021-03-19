import './form.css';
import React, {useState} from 'react';
import useFetchSuggestions from '../hooks/useFetchSuggestions';
import Suggestion from './Suggestion';
// import axios from 'axios';
// import {useForm} from 'react-hook-form';
// import styled from 'styled-components';
// import {yupResolver} from '@hookform/resolvers/yup';

const Form = () => {
  const [page, setPage] = useState(0);
  const {suggestions, loading, error} = useFetchSuggestions(page);
  console.log(`suggestions`, suggestions);

  // const {register, handleSubmit, watch, errors} = useForm({
  //     resolver: yupResolver(suggestionSchema),
  //   });

  console.log(`page`, page);

  function handlePageUp() {
    setPage((prevPage) => prevPage + 1);
  }

  function handlePageDown() {
    setPage((prevPage) => prevPage - 1);
  }

  return (
    <div>
      {suggestions?.map((suggestion, index) => {
        return (
          <Suggestion suggestion={suggestion} loading={loading} key={index} />
        );
      })}
      <button onClick={handlePageUp}>Up</button>
      <button onClick={handlePageDown}>Down</button>
    </div>

    // <StyledForm onSubmit={handleSubmit(onSubmit)}>
    //   <StyledInput
    //     name='name'
    //     placeholder='Name of the Synth...'
    //     ref={register}
    //   />
    // </StyledForm>
  );
};

export default Form;
