import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Accept from '../components/Accept';

const Admin = () => {
  return (
    <>
      {/* <Navigation /> */}
      <StyledAdminPage>
        <Accept />
      </StyledAdminPage>
    </>
  );
};

const StyledAdminPage = styled.div``;

export default Admin;
