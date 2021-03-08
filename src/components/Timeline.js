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
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
`;

const Line = styled.div`
  height: 100%;
  left: 50%;
  position: absolute;
  width: 4px;
  background: purple;
`;

export default Timeline;
