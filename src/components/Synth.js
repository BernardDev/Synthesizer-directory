import React, {useState, useCallback} from 'react';
import styled, {keyframes, css} from 'styled-components';

const Synth = ({reference, synth, index}) => {
  const {name, img, Specification} = synth;
  const [show, setShow] = useState(false);

  const animationTrigger = useCallback((node) => {
    const options = {
      threshold: 0.25,
    };
    const observer = new IntersectionObserver(([lastElementOnPage]) => {
      if (lastElementOnPage.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    }, options);
    if (node) observer.observe(node);
  }, []);

  return (
    <SynthContainer ref={reference ? reference : () => {}} show={show}>
      <Year even={index % 2 === 0}>
        <YearText>{Specification.yearProduced}</YearText>
      </Year>

      <SynthItem show={show} ref={animationTrigger}>
        <SynthName>{name}</SynthName>
        <Img src={img} />
      </SynthItem>
    </SynthContainer>
  );
};

const Year = styled.div`
  font-size: 1rem;
  position: sticky;
  top: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    return props.even
      ? css`
          right: 50%;
        `
      : css`
          left: 50%;
        `;
  }};
`;

const YearText = styled.p`
  font-size: 1rem;
  color: #fff;
`;

const SynthItem = styled.div`
  flex-grow: 0;
  width: 40vw;
  margin: 0 5vw;
`;

const SynthName = styled.p`
  text-align: center;
  font-size: 1rem;
`;

const appearLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-25%);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;

const appearRight = keyframes`
from {
  opacity: 0;
  transform: translateX(25%);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;

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
  width: 85%;
`;

export default Synth;
