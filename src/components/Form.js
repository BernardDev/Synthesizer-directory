import './form.css';
import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import {yupResolver} from '@hookform/resolvers/yup';
import suggestionSchema from '../validation/suggestionSchema';
import UploadButton from '../components/elements/UploadButton';
import {FlexColumn} from './styles/componentStyles';

const Form = () => {
  const [fileName, setFileName] = useState('Upload a Photo');
  const [response, setResponse] = useState('');
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(suggestionSchema),
  });

  const onSubmit = async (data) => {
    setResponse('');
    const formData = new FormData();
    formatFormData(data, formData);
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
      setResponse(res.data.message);
    } catch (error) {
      setResponse(error.response.statusText);
    }
  };

  const handleSelectFile = (e) => {
    if (!e.target.files[0]) {
      setFileName('Upload a file');
      return;
    }
    setFileName(`${e.target.files[0].name}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        name='name'
        placeholder='Name of the Synth...'
        ref={register({required: true, maxLength: 80})}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <StyledInput
        name='manufacturer'
        placeholder='Manufacturer of the Synth...'
        ref={register({required: true, maxLength: 80})}
      />
      {errors.manufacturer && <p>{errors.manufacturer.message}</p>}
      <StyledInput
        type='number'
        name='yearProduced'
        placeholder='First Produced in...'
        ref={register}
      />
      {errors.yearProduced && <p>{errors.yearProduced.message}</p>}
      <UploadButton
        handleSelectFile={handleSelectFile}
        register={register}
        fileName={fileName}
      />
      {errors.image && <p>{errors.image.message}</p>}
      <StyledLabel>Optional</StyledLabel>
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
      <StyledInput
        name='control'
        ref={register}
        placeholder='Controlled by MIDI/CV...'
      />
      <StyledInput
        name='memory'
        placeholder='Memory Options...'
        ref={register}
      />
      <StyledInput
        name='oscillators'
        placeholder='Oscillator Amount and Types...'
        ref={register}
      />
      <StyledInput name='filter' placeholder='Filter Types...' ref={register} />
      <StyledInput name='lfo' placeholder="Amount of LFO's..." ref={register} />
      <StyledInput
        name='effects'
        placeholder='Effect Types...'
        ref={register}
      />
      <FlexColumn>
        <StyledSubmit type='submit' />
      </FlexColumn>
      {response && <p>{response}</p>}
    </StyledForm>
  );
};

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 2px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

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

const StyledLabel = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

export default Form;

function formatFormData(data, formData) {
  // formData.append('polyphony', data.polyphony);
  // formData.append('keyboard', data.keyboard);
  // formData.append('control', data.control);
  // formData.append('yearProduced', data.yearProduced);
  // formData.append('memory', data.memory);
  // formData.append('oscillators', data.oscillators);
  // formData.append('filter', data.filter);
  // formData.append('lfo', data.lfo);
  // formData.append('effects', data.effects);
  // formData.append('manufacturer', data.manufacturer);
  // formData.append('name', data.name);
  // formData.append('image', data.image[0]);
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  delete formData.image;
  formData.append('image', data.image[0]);
}
