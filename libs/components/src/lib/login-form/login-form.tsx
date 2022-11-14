import { useTranslation } from 'react-i18next';
import { Form } from './login-form.styled';
import { StyledButton } from '@freelance/components';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation();

  return (
    <Form>
      <input type="email" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      <StyledButton buttonSize="lg" buttonColor="redGradient">
        {t('signForm.buttonSignIn')}
      </StyledButton>
    </Form>
  );
}

export default LoginForm;
