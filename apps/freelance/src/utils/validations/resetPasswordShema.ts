import { object, string, ref, SchemaOf } from 'yup';
import { useTranslation } from 'react-i18next';
import { IResetPasswordForm } from '@freelance/components';

export const useResetPasswordSchema = (): SchemaOf<IResetPasswordForm> => {
  const { t } = useTranslation();
  const messageMinChar: string = t('recoverPassForm.validationMinChar');
  const messageMaxChar: string = t('recoverPassForm.validationMaxChar');
  const messageRequiredPassword: string = t('recoverPassForm.validationRequiredPassword');
  const messageConfirmPassword: string = t('recoverPassForm.validationConfirmPassword');
  const messageMatchingPassword: string = t('recoverPassForm.validationMatchingPasswords');

  return object({
    password: string()
      .min(6, messageMinChar)
      .max(15, messageMaxChar)
      .required(messageRequiredPassword),
    passConfirm: string()
      .required(messageConfirmPassword)
      .oneOf([ref('password'), null], messageMatchingPassword),
  });
};
