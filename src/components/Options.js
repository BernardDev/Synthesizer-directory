import React from 'react';
import styled from 'styled-components';

const Options = ({query, handleSearch}) => {
  return (
    <OptionsContainer>
      <Field type='text' value={query} onChange={handleSearch} />
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  height: 40px;
  width: 100%;
  background-color: #000;
  z-index: 1;
`;

const Field = styled.input`
  height: 20px;
  width: 22%;
`;

export default Options;
