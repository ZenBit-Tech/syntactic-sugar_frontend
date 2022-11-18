import { object, ref, string } from 'yup';

export const signUpSchema = object({
  email:  string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: string().required('Password is required')
    .min(8, 'minimum is 8')
    .max(24, 'maximum is 24'),
  passwordConfirmation: string()
    .oneOf([ref('password'), null], 'Passwords must match')
});
