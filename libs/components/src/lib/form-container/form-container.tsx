import { Container } from './form-container.styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  FormHeader,
  StyledParagraph,
  LoginForm,
  SignupForm,
  RecoverPassFirstForm,
  StyledButton,
} from '@freelance/components';
import  { useGoogleAuthentication } from './form-containerHooks';

export interface FormContainerProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  signText?: React.ReactNode;
  signLink?: React.ReactNode;
  forgotPassText?: React.ReactNode;
  forgotPassLink?: React.ReactNode;
  isRightSide: boolean;
  isSignForm: boolean;
  formType: 'login' | 'signup' | 'recoverPass1';
}

export function FormContainer({
  isRightSide,
  title,
  subTitle,
  isSignForm,
  formType,
  signText,
  signLink,
  forgotPassText,
  forgotPassLink,
}: FormContainerProps) {
  const { t } = useTranslation();
  const { handleSuccess } = useGoogleAuthentication();

  return (
    <Container isRightSide={isRightSide}>
      <FormHeader title={title} subTitle={subTitle} isSignForm={isSignForm} />
      {formType === 'login' && <LoginForm />}
      {formType === 'signup' && <SignupForm />}
      {formType === 'recoverPass1' && <RecoverPassFirstForm />}
      <StyledParagraph fontSize="md">
        {signText}
        {isRightSide || !isSignForm ? (
          <Link to="/">
            <strong>{signLink}</strong>
          </Link>
        ) : (
          <Link to="/signup">
            <strong>{signLink}</strong>
          </Link>
        )}
      </StyledParagraph>
      <StyledParagraph fontSize="md">
        {forgotPassText}
        <Link to="/recover-password">
          <strong>{forgotPassLink}</strong>
        </Link>
      </StyledParagraph>
      {isSignForm && (
        <StyledButton onClick={() => handleSuccess()} id="googleBtn" buttonSize="md" buttonColor="blue">
          <img src="/assets/images/google_logo.png" alt="Google Logo" />
          {t('signForm.buttonGoogle')}
        </StyledButton>
      )}
    </Container>
  );
}

export default FormContainer;
