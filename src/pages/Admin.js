import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Accept from '../components/Accept';

const Admin = () => {
  return (
    <StyledAdminPage>
      <Navigation />
      <Accept />
    </StyledAdminPage>
  );
};

const StyledAdminPage = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;

export default Admin;
