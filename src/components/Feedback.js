import React from 'react';
import styled from 'styled-components';

const Feedback = ({error}) => {
  return (
    <>
      <Alert error={error}>{error?.text}</Alert>
    </>
  );
};

const Alert = styled.div`
  background-color: red;
  display: ${(error) => (error ? 'block' : 'none')};
`;

export default Feedback;
