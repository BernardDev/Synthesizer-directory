import React from 'react';

const Suggestion = ({suggestion, loading}) => {
  console.log(`suggestion`, suggestion);
  // console.log(`suggestion`, suggestion);
  // console.log(`loading`, loading);
  return <div>{suggestion?.name}</div>;
};

export default Suggestion;
