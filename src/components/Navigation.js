import React from 'react';
import styled from 'styled-components';

const Navigation = ({query, handleSearch}) => {
  return (
    <>
      <Field type='text' value={query} onChange={handleSearch} />
    </>
  );
};

const Field = styled.input`
  height: 20px;
  width: 30%;
`;

export default Navigation;
