import React from 'react';
import styled from 'styled-components';

const Options = ({query, handleSearch, manufacturers}) => {
  return (
    <OptionsContainer>
      <Field type='text' list='data' value={query} onChange={handleSearch} />
      <Datalist id='data'>
        {manufacturers?.map((company, key) => (
          <option key={key} value={company.manufacturer} />
        ))}
      </Datalist>
    </OptionsContainer>
  );
};

const Datalist = styled.datalist``;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  height: 40px;
  width: 100%;
  background-color: #3c3c3c;
  z-index: 1;
`;

const Field = styled.input`
  height: 20px;
  width: 22%;
`;

export default Options;
