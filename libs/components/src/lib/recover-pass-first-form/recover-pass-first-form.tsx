import { useEffect } from 'react';
import { Form } from './recover-pass-first-form.styled';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { StyledButton } from '@freelance/components';
import { IFormInputs } from './interfaces';
import { schemaForgotPasswordForm } from 'utils/validations/validation-shemas';
import { useForgotPasswordSendEmail } from './recover-pass-firstHooks';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecoverPassFirstFormProps {}

export function RecoverPassFirstForm(props: RecoverPassFirstFormProps) {
  const { t } = useTranslation();
  const schema = schemaForgotPasswordForm();
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const { onSubmit, isLoading } = useForgotPasswordSendEmail();
  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder={t('signForm.placeholderEmail')} {...register('email')} />
      {errors.email && <span>{errors.email?.message}</span>}
      <StyledButton buttonSize="lg" buttonColor="redGradient" disabled={isLoading}>
        {isLoading ? t('recoverPassForm.loader') : t('recoverPassForm.buttonContinue')}
      </StyledButton>
      <ToastContainer />
    </Form>
  );
}

export default RecoverPassFirstForm;
