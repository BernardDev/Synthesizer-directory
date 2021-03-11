import React, {useState, useCallback} from 'react';
import styled, {keyframes, css} from 'styled-components';

const Synth = ({reference, synth, trigger, index}) => {
  // console.log('count ', count, 'synth', synth);
  console.log('trigger', trigger);
  const [show, setShow] = useState(false);

  const options = {
    threshold: 1,
  };

  // als reference?

  const lastElementOnPage = useCallback(
    (node) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
          console.log(synth.name);
        }
      }, options);
      if (node) observer.observe(node);
    },
    [trigger]
  );

  // let refFunction;

  // if (reference) {
  //   refFunction = reference;
  // } else if (observer.current !== null) {
  //   refFunction = wtf;
  // } else {
  //   refFunction = () => console.log('fake ref');
  // }

  // last loaded element will not be watched by observer for animation?
  // console.log('synth', synth);
  return (
    <SynthContainer show={show}>
      <Year even={index % 2 === 0}>
        <YearText>{synth.Specification.yearProduced}</YearText>
      </Year>
      <SynthItem show={show} ref={reference ? reference : lastElementOnPage}>
        <SynthName>{synth.name}</SynthName>
        <Img src={synth.img} />
      </SynthItem>
    </SynthContainer>
  );
};

// const Year = styled.div`
//   font-size: 1rem;
//   margin-left: -20px;
//   position: absolute;
//   top: 0;
//   left: 50%;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   color: #fff;
//   background-color: #000;
// `;

const Year = styled.div`
  font-size: 1rem;
  position: sticky;
  top: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background-color: #000;
  ${(props) => {
    return props.even
      ? css`
          right: 50%;
          margin: -7px;
        `
      : css`
          left: 50%;
        `;
  }};
`;

const YearText = styled.p`
  margin-left: 7px;
  font-size: 1rem;
  color: #fff;
`;

const appearLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50%);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;

const appearRight = keyframes`
from {
  opacity: 0;
  transform: translateX(50%);
}
to {
  opacity: 1;
  transform: translateX(0px);
}`;
// ---------

const SynthItem = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  flex-grow: 0;
  width: 30vw;
  margin: 0 15vw;
`;

const SynthName = styled.p`
  text-align: center;
  font-size: 1rem;
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
  opacity: 1;
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
