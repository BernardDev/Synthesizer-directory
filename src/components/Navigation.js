import React from 'react';
import styled from 'styled-components';
import Options from '../components/Options';

const Navigation = ({query, handleSearch}) => {
  return (
    <NavigationContainer>
      <NavigationBar />
      <Options query={query} handleSearch={handleSearch} />
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const NavigationBar = styled.div`
  background-color: green;
  height: 50px;
  width: 100%;
`;

export default Navigation;
