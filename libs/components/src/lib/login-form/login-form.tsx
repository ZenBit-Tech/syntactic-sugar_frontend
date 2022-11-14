import { useTranslation } from 'react-i18next';
import { Form } from './login-form.styled';
import { StyledButton } from '@freelance/components';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation();

  return (
    <Form>
      <input type="email" name="email" placeholder={t('signForm.placeholderEmail')} />
      <input type="password" name="password" placeholder={t('signForm.placeholderPassword')} />
      <StyledButton buttonSize="lg" buttonColor="redGradient">
        {t('signForm.buttonSignIn')}
      </StyledButton>
    </Form>
  );
}

export default LoginForm;
