import { Form } from './signup-form.styled';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@freelance/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const { t } = useTranslation();

  return (
    <Form>
      <input type="email" name="email" placeholder={t('signForm.placeholderEmail')} />
      <input type="password" name="password" placeholder={t('signForm.placeholderPassword')} />
      <input type="password" name="confirmPassword" placeholder={t('signForm.placeholderConfirmPassword')} />
      <StyledButton buttonSize="lg" buttonColor="redGradient">
        {t('signForm.buttonSignUp')}
      </StyledButton>
    </Form>
  );
}

export default SignupForm;
