import React from 'react';
import styled from 'styled-components';

const MenuBurger = () => {
  return (
    <div>
      <Line1 />
      <Line2 />
      <Line3 />
    </div>
  );
};

const Line1 = styled.div`
  margin: 3px;
  width: 20px;
  height: 3px;
  background-color: white;
`;

const Line2 = styled.div`
  margin: 3px;
  width: 20px;
  height: 3px;
  background-color: white;
`;

const Line3 = styled.div`
  margin: 3px;
  width: 20px;
  height: 3px;
  background-color: white;
`;

export default MenuBurger;
