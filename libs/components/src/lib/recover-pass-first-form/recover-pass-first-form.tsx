import { useEffect } from 'react';
import { Form } from './recover-pass-first-form.styled';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { StyledButton } from '@freelance/components';
import { IForgotPasswordForm } from './interfaces';
import { useForgotPasswordSchema } from 'utils/validations';
import { useForgotPasswordSendEmail } from './recover-pass-firstHooks';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecoverPassFirstFormProps {}

export function RecoverPassFirstForm(props: RecoverPassFirstFormProps) {
  const { t } = useTranslation();
  const schema = useForgotPasswordSchema();
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordForm>({
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
