import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Login from '../components/Login';
import Register from '../components/Register';

const RegisterLogin = () => {
  return (
    <StyledRegisterLogin>
      <Navigation />
      <Login />
      <Register />
    </StyledRegisterLogin>
  );
};

const StyledRegisterLogin = styled.div``;

export default RegisterLogin;
