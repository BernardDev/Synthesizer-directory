import React from 'react';
import styled from 'styled-components';

const Options = ({query, handleSearch, manufacturers}) => {
  return (
    <OptionsContainer>
      {/* <Sticky> */}
      <Field
        type='text'
        list='data'
        value={query}
        onChange={handleSearch}
        placeholder='search...'
      />
      <Datalist id='data'>
        {manufacturers?.map((company, key) => (
          <option key={key} value={company.manufacturer} />
        ))}
      </Datalist>
      {/* </Sticky> */}
    </OptionsContainer>
  );
};

// const Sticky = styled.div``;

const Datalist = styled.datalist``;

const OptionsContainer = styled.div`
  background: green;
  display: flex;
  justify-content: center;
  display: none;
  padding: 0.5rem;
  background-color: var(--grey);
`;

const Field = styled.input`
  width: 12vw;
  min-width: 90px;
`;

export default Options;
