import React, {useState} from 'react';
import styled, {keyframes, css} from 'styled-components';

const Synth = ({reference, synth, count}) => {
  console.log('count ', count, 'synth', synth);
  const [show, setShow] = useState(false);

  const intersectOptions = {
    threshold: 1,
  };

  const wtf = (node) => {
    const intersection = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShow(true);
        // if (intersection.current) intersection.current.disconnect();
      }
      console.log(
        entries[0].isIntersecting,
        'coming into the screen:',
        synth.name
      );
    }, intersectOptions);
    if (node) intersection.observe(node);
  };

  return (
    <SynthContainer show={show}>
      <SynthItem show={show} ref={reference ? reference : wtf}>
        <SynthName>{synth.name}</SynthName>
        <Img src={synth.img} />
      </SynthItem>
    </SynthContainer>
  );
};

const appearLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-400px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;

const appearRight = keyframes`
from {
  opacity: 0;
  transform: translateX(400px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;
// ---------

const SynthItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  width: 30vw;
  margin: 0 15vw;
`;

const SynthName = styled.p`
  text-align: center;
  font-size: 0.6rem;
`;

const bounceAnimationLeft = css`
  animation: ${appearLeft} 0.4s ease-out;
  animation-fill-mode: forwards;
`;

const bounceAnimationRight = css`
  animation: ${appearRight} 0.4s ease-out;
  animation-fill-mode: forwards;
`;

const SynthContainer = styled.div`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 10px;
  width: 100vw;
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
  width: 100%;
`;

export default Synth;
