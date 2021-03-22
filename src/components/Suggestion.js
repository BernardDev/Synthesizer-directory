import React from 'react';
import styled from 'styled-components';

const Suggestion = ({suggestion, loading, decline, accept}) => {
  // console.log(`suggestion`, suggestion);
  // console.log(`suggestion`, suggestion);
  // console.log(`loading`, loading);

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
        <div>{suggestion?.manufacturer}</div>
        <div>{suggestion?.yearProduced}</div>
        <div>{suggestion?.polyphony}</div>
        <div>{suggestion?.keyboard}</div>
        <div>{suggestion?.control}</div>
        <div>{suggestion?.manufacturer}</div>
        <div>{suggestion?.memory}</div>
        <div>{suggestion?.oscillators}</div>
        <div>{suggestion?.filter}</div>
        <div>{suggestion?.lfo}</div>
        <div>{suggestion?.effects}</div>
      </StyledInfo>
      <StyledButtonContainer>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </StyledButtonContainer>
    </StyledSuggestionCard>
  );
};

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledImgWrapper = styled.div`
  object-fit: contain;
  min-width: 200px;
`;

// fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
// contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
// cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
// none - The image is not resized
// scale-down - the image is scaled down to the smallest version of none or contain

const StyledImg = styled.img`
  max-width: 500px;
  max-height: 150px;

  /* max-height: 200px; */
  /* width: auto; */
  /* min-width: 300px;
  max-width: 500px; */
  /* grid-column: 3; */
  /* max-width: 100%; */
  /* overflow: hidden; */
`;

const StyledSuggestionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border: green solid 1px;
  /* grid-column: 1/2; */
  /* width: 200px;
  height: 200px; */
  /* display: inline-block; */
  /* where the magic happens */
`;

const StyledName = styled.h2``;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// function addItem()

// const ImgWrap

export default Suggestion;
