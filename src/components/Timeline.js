import React from 'react';
import styled from 'styled-components';

const Timeline = (props) => {
  return (
    <>
      <TimelineContainer>
        <Line />
        {props.children}
      </TimelineContainer>
    </>
  );
};

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
`;

const Line = styled.div`
  margin: 0 8rem;
  height: 100%;
  position: absolute;
  width: 4px;
  background: purple;
`;

export default Timeline;
