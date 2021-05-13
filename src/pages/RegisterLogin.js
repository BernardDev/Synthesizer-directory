import React from 'react';
import styled from 'styled-components';
import Login from '../components/Login';
import Register from '../components/Register';

const RegisterLogin = () => {
  return (
    <>
      {/* <Navigation /> */}
      <StyledRegisterLogin>
        <Register />
        <Login />
      </StyledRegisterLogin>
    </>
  );
};

const StyledRegisterLogin = styled.div``;

export default RegisterLogin;
