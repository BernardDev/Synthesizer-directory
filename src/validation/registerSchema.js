import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('No email provided.')
    .email('Please enter a valid email'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default schema;
