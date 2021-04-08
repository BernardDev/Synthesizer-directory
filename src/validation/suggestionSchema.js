import * as yup from 'yup';

let THISYEAR = new Date().getFullYear();
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

const schema = yup.object().shape({
  polyphony: yup.string(),
  keyboard: yup.string(),
  control: yup.string(),
  yearProduced: yup
    .number()
    .typeError('Please enter first year of production of the synthesizer')
    .required()
    .integer()
    .positive()
    .min(1960, 'Are you shure this synth is produced before 1860?')
    .max(THISYEAR, 'Year of production can not be in the future'),
  memory: yup.string(),
  oscillators: yup.string(),
  filter: yup.string(),
  lfo: yup.string(),
  effects: yup.string(),
  name: yup.string().required('Please enter the name of the synthesizer'),
  manufacturer: yup
    .string()
    .required('Please enter the name of the manufacturer'),
  image: yup
    .mixed()
    .required()
    .test('filePresent', 'Please add an image', (value) => {
      return value[0] !== undefined;
    })
    .test('fileSize', 'Please keep the file size less than 3MB', (value) => {
      return value && value[0]?.size <= 3000000;
    })
    .test('fileType', "Please add a file of type 'image' ", (value) => {
      if (value[0] === undefined) return;
      return value && SUPPORTED_FORMATS.includes(value[0].type);
    }),
});

export default schema;
