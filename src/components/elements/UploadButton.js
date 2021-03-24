import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileUpload} from '@fortawesome/free-solid-svg-icons';
import {FlexColumn} from '../styles/componentStyles';

const UploadButton = ({handleSelectFile, register, fileName}) => {
  return (
    <FlexColumn className='contain-submit'>
      <StyledInput
        type='file'
        name='image'
        id='image'
        htmlFor='image'
        onChange={handleSelectFile}
        ref={register}
      />
      <StyledUploadButton>
        <StyledLabel name='image' htmlFor='image'>
          <Label>{fileName}</Label>
        </StyledLabel>
        <StyleIconContainer>
          <FontAwesomeIcon icon={faFileUpload} size='lg' transform='left-2' />
        </StyleIconContainer>
      </StyledUploadButton>
    </FlexColumn>
  );
};

export default UploadButton;

const StyledInput = styled.input`
  font-size: 1rem;
  z-index: 0;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  &:focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

const StyledLabel = styled.label`
  width: 100%;
  cursor: pointer;
  position: relative;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-self: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  z-index: 0;
`;

const Label = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledUploadButton = styled.div`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  background: blue;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-left: 0;
  margin-right: 0;
  margin-top: 40px;
  width: 60%;
  white-space: nowrap;
`;

const StyleIconContainer = styled.span`
  position: absolute;
  transform-origin: center;
  right: 20px;
  z-index: 2;
`;
