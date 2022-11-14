import { Form } from './signup-form.styled';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@freelance/components';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const { t } = useTranslation();

  return (
    <Form>
      <input type="email" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" />
      <StyledButton buttonSize="lg" buttonColor="redGradient">
        {t('signForm.buttonSignUp')}
      </StyledButton>
    </Form>
  );
}

export default SignupForm;
