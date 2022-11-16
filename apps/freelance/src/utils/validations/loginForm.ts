import { object, string } from 'yup';

export const signInSchema = object({
  email:  string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: string()
    .min(5, 'minimum is 5')
    .max(24, 'maximum is 24')
    .required('password is required')
});
