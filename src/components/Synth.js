import React, {useState} from 'react';
import styled, {keyframes, css} from 'styled-components';

const Synth = ({reference, synth}) => {
  const [show, setShow] = useState(false);

  const intersectOptions = {
    threshold: 1,
  };

  const wtf = (node) => {
    const intersection = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShow(true);
      }
      console.log(
        entries[0].isIntersecting,
        'coming into the screen:',
        synth.name
      );
    }, intersectOptions);
    if (node) intersection.observe(node);
  };

  // ---EXAMPLE---
  // const wtf = (node) => {
  //   const intersection = new IntersectionObserver((entries, intersection) => {
  //     entries.forEach((entry) => {
  //       if (!entry.isIntersecting) {
  //         return;
  //       } else {
  //         setShow(true);
  //         intersection.unobserve(entry.target);
  //       }
  //     });
  //     // if (entries[0].isIntersecting) {
  //     //   setShow(true);
  //     // }
  //     // console.log(entries[0].isIntersecting, 'ís dit er', synth.name);
  //   }, intersectOptions);
  //   if (node) intersection.observe(node);
  // };

  return (
    <SynthContainer show={show}>
      <SynthItem show={show} ref={reference ? reference : wtf}>
        {' '}
        <p>{synth.name}</p>
        {<Img src={synth.img} />}
      </SynthItem>
    </SynthContainer>
  );
};

const cdBounce2 = keyframes`
0% {
  opacity: 0;
  transform: translateX(-100px);
}

60% {
  opacity: 1;
  transform: translateX(20px);
}

100% {
  transform: translateX(0);
}
`;

const cdBounce2inverse = keyframes`
0% {
  opacity: 0;
  transform: translateX(100px);
}

60% {
  opacity: 1;
  transform: translateX(-20px);
}

100% {
  transform: translateX(0);
}
`;

const appearLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-100px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;

const appearRight = keyframes`
from {
  opacity: 0;
  transform: translateX(100px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;
// ---------

// import styled, { css } from 'styled-components'

// const complexMixin = css`;
//   color: ${props => (props.whiteColor ? 'white' : 'black')};
// `

// const StyledComp = styled.div`
//   /* This is an example of a nested interpolation */
//   ${props => (props.complex ? complexMixin : 'color: blue;')};
// `

const SynthItem = styled.div`
  background-color: pink;
  flex-grow: 0;
  /* transition: 2s; */
  /* animation: ${cdBounce2} 0.6s; */
  /* visibility: ${(props) => (props.show ? 'visible' : 'hidden')}; */
`;

const bounceAnimationLeft = css`
  /* transform: translateX(0px); */
  animation: ${appearLeft} 0.7s ease;
  animation-fill-mode: forwards;
  /* animation-duration: 2s; */
  /* transition: 2s; */
  /* transition-delay: 2s; */
`;

const bounceAnimationRight = css`
  /* transform: translateX(-200px); */
  /* animation-duration: 2s; */
  animation: ${appearRight} 0.7s ease;
  animation-fill-mode: forwards;
  transition: 2s;
  /* transition-delay: 2s; */
`;

const SynthContainer = styled.div`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 700px;
  margin-bottom: 10px;
  /* background-color: rgba(255, 255, 0, 0.2); */
  /* visibility: ${(props) => (props.show ? 'none' : 'hidden')}; */
  /* background-color: ${(props) => (props.show ? 'red' : 'green')}; */
  &:nth-child(even) {
    flex-direction: row-reverse;
    ${(props) => {
      return props.show ? bounceAnimationLeft : '';
    }}
  }
  &:nth-child(odd) {
    flex-direction: row;
    ${(props) => {
      return props.show ? bounceAnimationRight : '';
    }}
  }
`;
// ---------

// const cdBounce2mixin = css`
// animation-name: cdBounce2;
// animation-duration: 0.6s;
// `;

// ----
// const SynthItem = styled.div`
//   background-color: pink;
//   flex-grow: 0;
// `;

// const SynthContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   position: relative;
//   width: 700px;
//   margin-bottom: 10px;
//   background-color: rgba(255, 255, 0, 0.2);
//   transition: 2s;
//   background-color: ${(props) => (props.show ? 'red' : 'green')};
//   /* animation: ${(props) => (props.show ? cdBounce2 : '')}; */
//   &:nth-child(even) {
//     flex-direction: row-reverse;
//     /* animation-name: ${cdBounce2inverse}; */
//   }
// `;
// ----

const Img = styled.img`
  height: auto;
  width: 300px;
`;

export default Synth;
