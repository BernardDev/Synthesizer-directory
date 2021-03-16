import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileUpload} from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
import {ErrorMessage} from '@hookform/error-message';
import {yupResolver} from '@hookform/resolvers/yup';

import './form.css';
import axios from 'axios';

let THISYEAR = new Date().getFullYear();

const schema = yup.object().shape({
  polyphony: yup.string().max(80),
  keyboard: yup.string().max(80),
  control: yup.string().max(80),
  yearProduced: yup
    .number()
    .integer()
    .positive()
    .min(1960)
    .max(THISYEAR)
    .required(),
  memory: yup.string().max(80),
  oscillators: yup.string().max(80),
  filter: yup.string().max(80),
  lfo: yup.string().max(80),
  effects: yup.string().max(80),
  name: yup.string().max(80).required(),
  manufacturer: yup.string().max(80).required(),
  // image: yup.string().url().required(),
});

const Form = () => {
  const [fileName, setFileName] = useState('Upload a Photo');

  const {register, handleSubmit, watch, errors} = useForm({
    resolver: yupResolver(schema),
  });

  // it is not possible to console log form data

  const onSubmit = async (data) => {
    // console.log(data, 'is data');
    const formData = new FormData();

    formData.append('polyphony', data.polyphony);
    formData.append('keyboard', data.keyboard);
    formData.append('control', data.control);
    formData.append('yearProduced', data.yearProduced);
    formData.append('memory', data.memory);
    formData.append('oscillators', data.oscillators);
    formData.append('filter', data.filter);
    formData.append('lfo', data.lfo);
    formData.append('effects', data.effects);
    formData.append('name', data.name);
    formData.append('manufacturer', data.manufacturer);
    // formData.append('image', data.image)

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/contribute`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
      // console.log(response, 'dit is response');
    }
  };

  const handleSelectFile = (e) => {
    setFileName(`${e.target.files[0]?.name}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* <StyledLabel>Name</StyledLabel> */}
      <StyledInput
        name='name'
        defaultValue=''
        placeholder='Name of the Synth...'
        ref={register({required: true, maxLength: 80})}
      />
      {errors.name && <p>{errors.name.message}</p>}
      {/* <StyledLabel>Manufacturer</StyledLabel> */}
      <StyledInput
        name='manufacturer'
        defaultValue=''
        placeholder='Manufacturer of the Synth...'
        ref={register({required: true, maxLength: 80})}
      />
      {errors.manufacturer && <p>{errors.manufacturer.message}</p>}
      {/* <StyledLabel>Year of Production</StyledLabel> */}
      <StyledInput
        type='number'
        name='yearProduced'
        placeholder='First Produced in...'
        ref={register}
      />
      {errors.yearProduced && <p>{errors.yearProduced.message}</p>}
      {/* <ErrorMessage errors={errors} name={name} /> DIT MOET OPGELOST WORDEN */}
      <FlexContainer className='contain-submit'>
        <input
          type='file'
          name='file'
          id='file'
          className='inputfile'
          onChange={handleSelectFile}
        />
        <StyledUploadButton>
          <label className='inputfileLabel' htmlFor='file'>
            {/* {!fileName || fileName === undefined
            ? `${(<FontAwesomeIcon icon={faCoffee} />)} Choose a file`
            : `${(<FontAwesomeIcon icon={faCoffee} />)} ${fileName}`} */}
            {fileName === 'choose a file' ? fileName : fileName}
          </label>
          <StyleIconContainer>
            <FontAwesomeIcon icon={faFileUpload} size='lg' transform='left-2' />
          </StyleIconContainer>
        </StyledUploadButton>
      </FlexContainer>
      <StyledLabel>Optional</StyledLabel>
      {/* <StyledLabel>Polyphony</StyledLabel> */}
      <StyledInput
        name='polyphony'
        placeholder='Amount of Voices...'
        ref={register}
      />
      <StyledInput
        name='keyboard'
        placeholder='Amount of Keys...'
        ref={register}
      />
      {/* <StyledLabel>Control</StyledLabel> */}
      <StyledInput
        name='control'
        ref={register}
        placeholder='Controlled by MIDI/CV...'
      />
      {/* <StyledLabel>Memory</StyledLabel> */}
      <StyledInput
        name='memory'
        placeholder='Memory Options...'
        ref={register}
      />
      {/* <StyledLabel>Oscillators</StyledLabel> */}
      <StyledInput
        name='oscillators'
        placeholder='Oscillator Amount and Types'
        ref={register}
      />
      {/* <StyledLabel>Filter</StyledLabel> */}
      <StyledInput name='filter' placeholder='Filter Types...' ref={register} />
      {/* <StyledLabel>LFO</StyledLabel> */}
      <StyledInput name='lfo' placeholder="Amount of LFO's..." ref={register} />
      {/* <StyledLabel>Effect's</StyledLabel> */}
      <StyledInput
        name='effects'
        placeholder='Effect Types...'
        ref={register}
      />
      <FlexContainer>
        <StyledSubmit type='submit' />
      </FlexContainer>
    </StyledForm>
  );
};

// var inputs = document.querySelectorAll( '.inputfile' );
// Array.prototype.forEach.call( inputs, function( input )
// {
// 	var label	 = input.nextElementSibling,
// 		labelVal = label.innerHTML;

// 	input.addEventListener( 'change', function( e )
// 	{
// 		var fileName = '';
// 		if( this.files && this.files.length > 1 )
// 			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
// 		else
// 			fileName = e.target.value.split( '\' ).pop();

// 		if( fileName )
// 			label.querySelector( 'span' ).innerHTML = fileName;
// 		else
// 			label.innerHTML = labelVal;
// 	});
// });

const StyledUploadButton = styled.div`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  background: green;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-left: 0;
  margin-right: 0;
  margin-top: 40px;
  padding: 15px;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyleIconContainer = styled.span`
  position: absolute;
  /* padding-top: 100px; */
  transform-origin: center;
  /* top: 30%; */
  right: 20px;
  z-index: 2;
  /* padding-left: 20px; */
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 2px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

// const StyledAttachment = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   border-radius: 2px;
//   border: 1px solid white;
//   padding: 10px 15px;
//   margin-bottom: 10px;
//   font-size: 14px;
// `;

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  background-color: wheat;
`;

const StyledSubmit = styled.input`
  box-sizing: border-box;
  background: green;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-left: 0;
  margin-right: 0;
  margin-top: 40px;
  padding: 15px;
  width: 60%;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

export default Form;
