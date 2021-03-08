import React from 'react';

const Feedback = ({loading, error}) => {
  return (
    <>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
      <br />
    </>
  );
};

export default Feedback;
