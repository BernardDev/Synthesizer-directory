import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

const Contribute = () => {
  return (
    <>
      <StyledContributePage>
        <Form />
      </StyledContributePage>
    </>
  );
};

const StyledContributePage = styled.div`
  width: 100%;
  height: 100%;
`;

export default Contribute;
