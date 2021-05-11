import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Form from '../components/Form';

const Contribute = () => {
  return (
    <>
      {/* <Navigation /> */}
      <StyledContributePage>
        <Form />
      </StyledContributePage>
    </>
  );
};

const StickyContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 99;
`;

const StyledContributePage = styled.div`
  width: 100%;
  height: 100%;
`;

export default Contribute;
