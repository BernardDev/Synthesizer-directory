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

const TimelineContainer = styled.div``;

const Line = styled.div`
  /* margin: 0 8rem; */
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  /* transform: translateX(); */
  width: 4px;
  background: #000;
`;

export default Timeline;
