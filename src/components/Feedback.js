import React from 'react';
import styled from 'styled-components';

const Feedback = ({error}) => {
  console.log('error from feedback', error);
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

// const StyledFeedback = styled.div``;

export default Feedback;
