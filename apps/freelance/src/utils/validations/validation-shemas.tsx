import * as yup from 'yup';

export const schemaForgotPasswordForm = yup.object({
  email: yup.string().email().required(),
});
