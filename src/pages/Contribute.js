import React from 'react';
// import useFetchSynth from '../hooks/useFetchSynth';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Form from '../components/Form';

const Contribute = () => {
  // const synth = useFetchSynth();
  return (
    <StyledContributePage>
      <Navigation />
      <Form />
    </StyledContributePage>
  );
};

const StyledContributePage = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 100%;
`;

export default Contribute;
