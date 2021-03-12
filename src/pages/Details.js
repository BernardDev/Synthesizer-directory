import React from 'react';
import useFetchSynth from '../hooks/useFetchSynth';
import styled from 'styled-components';

const Details = () => {
  const synth = useFetchSynth();
  console.log('synth', synth);
  return <Card>{synth.name}</Card>;
};

const Card = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

export default Details;
