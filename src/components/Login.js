import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import {yupResolver} from '@hookform/resolvers/yup';
import loginSchema from '../validation/registerSchema';
import {FlexColumn} from './styles/componentStyles';
import {StyledButton} from './elements/Button';

const Login = () => {
  const [response, setResponse] = useState('');
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(`data`, data);
    setResponse('');
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        data
      );
      setResponse(res.data.message);
    } catch (error) {
      setResponse(error.response.statusText);
      console.log(`error`, error);
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>Login</StyledLabel>
        <StyledInput
          name='email'
          email='email'
          placeholder='Enter your email...'
          ref={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <StyledInput
          name='password'
          password='password'
          placeholder='Enter your password'
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <FlexColumn>
          <StyledButton type='submit' />
        </FlexColumn>
        {response && <p>{response}</p>}
      </StyledForm>
    </>
  );
};

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 2px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background: linear-gradient(#3c3c3c, #3c3c3c) center bottom 1px /
    calc(100% - 10px) 1px no-repeat;
  background-color: #fcfcfc;
`;

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #cdcdcd;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

export default Login;
