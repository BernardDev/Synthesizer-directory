import './accept.css';
import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledButtonNormal} from './elements/Button';

const Suggestion = ({suggestion, loading, decline, accept, error}) => {
  console.log(`suggestio.error`, suggestion.message);
  // const [feedback, setFeedback] = useState('messaging');

  const handleAccept = () => {
    accept(suggestion.id);
  };
  const handleDecline = () => {
    decline(suggestion.id);
  };

  return (
    <StyledSuggestionCard>
      <StyledImgWrapper>
        <StyledImg src={suggestion?.image} />
      </StyledImgWrapper>
      <StyledName>{suggestion?.name}</StyledName>
      <StyledInfo>
        <Block>
          <Heading>Manufacturer: </Heading>
          <Text>{suggestion?.manufacturer}</Text>
        </Block>
        <Block>
          <Heading>Year Produced: </Heading>
          <Text>{suggestion?.yearProduced}</Text>
        </Block>
        <Block>
          <Heading>Polyphony: </Heading>
          <Text>{suggestion?.polyphony}</Text>
        </Block>
        <Block>
          <Heading>Keyboard: </Heading>
          <Text>{suggestion?.keyboard}</Text>
        </Block>
        <Block>
          <Heading>Control: </Heading>
          <Text>{suggestion?.control}</Text>
        </Block>
        <Block>
          <Heading>Memory: </Heading>
          <Text>{suggestion?.memory}</Text>
        </Block>
        <Block>
          <Heading>Oscillators: </Heading>
          <Text>{suggestion?.oscillators}</Text>
        </Block>
        <Block>
          <Heading>Filter: </Heading>
          <Text>{suggestion?.filter}</Text>
        </Block>
        <Block>
          <Heading>LFO: </Heading>
          <Text>{suggestion?.lfo}</Text>
        </Block>
        <Block>
          <Heading>Effects: </Heading>
          <Text>{suggestion?.effects}</Text>
        </Block>
        <div>{suggestion.message}</div>
      </StyledInfo>
      <StyledButtonContainer>
        <StyledButtonNormal onClick={handleAccept}>Accept</StyledButtonNormal>
        <StyledButtonNormal style={{background: 'red'}} onClick={handleDecline}>
          Decline
        </StyledButtonNormal>
      </StyledButtonContainer>
    </StyledSuggestionCard>
  );
};

const Block = styled.div`
  margin: 0.5rem 0;
`;

const Heading = styled.span`
  font-weight: 700;
`;

const Text = styled.span`
  font-weight: 300;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* width: 100%; */
`;

const StyledImgWrapper = styled.div`
  margin: 0 auto;
  /* max-width: 300px; */
  width: 300px;
  height: auto;
`;

// fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
// contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
// cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
// none - The image is not resized
// scale-down - the image is scaled down to the smallest version of none or contain

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledSuggestionCard = styled.div`
  break-inside: avoid;
  margin-bottom: 1em;
  padding: 1rem;
  border: 1px solid #cdcdcd;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledName = styled.h2``;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  word-wrap: break-word;
`;

// function addItem()

// const ImgWrap

export default Suggestion;
