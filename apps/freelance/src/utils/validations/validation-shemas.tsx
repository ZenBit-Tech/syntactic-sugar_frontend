import { object, string, SchemaOf } from 'yup';
import { useTranslation } from 'react-i18next';

export interface SendEmailForm {
  email: string;
}

export const schemaForgotPasswordForm = (): SchemaOf<SendEmailForm> => {
  const { t } = useTranslation();
  const messageEmail: string = t('recoverPassForm.validationEmailMessage');
  const messageRequired: string = t('recoverPassForm.validationRequiredMessage');

  return object({
    email: string().email(messageEmail).required(messageRequired),
  });
};
