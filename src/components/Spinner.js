import React from 'react';
import styled, {keyframes} from 'styled-components';

const Spinner = (props) => {
  console.log(`props`, props);
  return (
    <div>
      <StyleSvg
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <StyledCircle cx='50' cy='50' r='45' />
      </StyleSvg>
    </div>
  );
};

const circleAnimation = keyframes`
0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

const svgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const StyledCircle = styled.circle`
  animation: 1.4s ease-in-out infinite both ${circleAnimation};
  fill: transparent;
  stroke: #000;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
`;

const StyleSvg = styled.svg`
  display: ${(props) => (props.loading ? 'block' : 'none')};
  animation: 1s linear infinite ${svgAnimation};
  max-width: 100px;
`;

export default Spinner;
