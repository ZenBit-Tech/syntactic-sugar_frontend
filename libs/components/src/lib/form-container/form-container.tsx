import { Container } from './form-container.styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FormHeader, StyledParagraph, LoginForm, StyledButton } from '@freelance/components';
import { useGoogleLogin } from '@react-oauth/google';
import { useLoginWithGoogleMutation } from 'redux/auth.api';

export interface FormContainerProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  signText?: React.ReactNode;
  signLink?: React.ReactNode;
  forgotPassText?: React.ReactNode;
  forgotPassLink?: React.ReactNode;
  isRightSide: boolean;
  isSignForm: boolean;
  formType: 'login';
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
  const [loginWithGoogle] = useLoginWithGoogleMutation();

  const loginGoogle = useGoogleLogin({
    onSuccess: async coderesponse => {
      const response = await loginWithGoogle({ token: coderesponse.access_token });
      return response;
    },
  });

  return (
    <Container isRightSide={isRightSide}>
      <FormHeader title={title} subTitle={subTitle} isSignForm={isSignForm} />
      {formType === 'login' && <LoginForm />}
      <StyledParagraph fontSize="md">
        {signText}
        {isRightSide ? (
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
        <StyledButton
          id="googleBtn"
          buttonSize="md"
          buttonColor="blue"
          onClick={() => {
            loginGoogle();
          }}
        >
          <img src="/assets/images/google_logo.png" alt="Google Logo" />
          {t('signForm.buttonGoogle')}
        </StyledButton>
      )}
    </Container>
  );
}

export default FormContainer;
