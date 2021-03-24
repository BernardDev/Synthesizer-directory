import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileUpload} from '@fortawesome/free-solid-svg-icons';
import {FlexColumn} from '../styles/componentStyles';

const UploadButton = ({handleSelectFile, register, fileName}) => {
  return (
    <FlexColumn className='contain-submit'>
      <input
        type='file'
        name='image'
        id='image'
        htmlFor='image'
        onChange={handleSelectFile}
        ref={register}
        className='inputfile'
      />

      <StyledUploadButton>
        <label className='inputfileLabel' name='image' htmlFor='image'>
          <Label>{fileName}</Label>
        </label>
        <StyleIconContainer>
          <FontAwesomeIcon icon={faFileUpload} size='lg' transform='left-2' />
        </StyleIconContainer>
      </StyledUploadButton>
    </FlexColumn>
  );
};

export default UploadButton;

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
