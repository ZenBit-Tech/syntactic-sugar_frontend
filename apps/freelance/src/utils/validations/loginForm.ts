import { object, string } from 'yup';
// eslint-disable-next-line react-hooks/rules-of-hooks

export const signInSchema = object({
  email:  string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: string()
    .min(8, 'minimum is 8')
    .max(24, 'maximum is 24')
    .required('password is required')
});
