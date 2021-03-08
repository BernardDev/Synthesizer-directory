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

const SynthItem = styled.div`
  background-color: pink;
  flex-grow: 0;
`;

const bounceAnimationLeft = css`
  animation: ${appearLeft} 0.7s ease;
  animation-fill-mode: forwards;
`;

const bounceAnimationRight = css`
  animation: ${appearRight} 0.7s ease;
  animation-fill-mode: forwards;
`;

const SynthContainer = styled.div`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 700px;
  margin-bottom: 10px;
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

const Img = styled.img`
  height: auto;
  width: 300px;
`;

export default Synth;
