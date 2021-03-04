import React from 'react';
import styled from 'styled-components';

import Fetch from '../components/Fetch';
import Timeline from '../components/Line';

const Home = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  /* height: 100%; */
`;

const Homepage = () => {
  return (
    <Home>
      <Fetch />
      <Timeline />
    </Home>
  );
};

export default Homepage;
