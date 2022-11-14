import { Container } from './form-container.styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { StyledTitle, StyledParagraph, StyledButton } from '@freelance/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormContainerProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  buttonText: React.ReactNode;
  signText?: React.ReactNode;
  signLink?: React.ReactNode;
  forgotPassText?: React.ReactNode;
  forgotPassLink?: React.ReactNode;
  isRightSide: boolean;
}

export function FormContainer({
  title,
  subTitle,
  isRightSide,
  buttonText,
  signText,
  signLink,
  forgotPassText,
  forgotPassLink,
}: FormContainerProps) {
  const { t } = useTranslation();
  return (
    <Container isRightSide={isRightSide}>
      <StyledTitle tag="h2" fontWeight={800} fontSize="md">
        {title}
      </StyledTitle>
      <img id="logo" src="/assets/images/logo.png" alt="logo" />
      <StyledParagraph fontSize="md">{subTitle}</StyledParagraph>
      <form>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        {isRightSide ? (
          <input type="password" name="confirmPassword" placeholder="Confirm Password" />
        ) : (
          ''
        )}
        <StyledButton buttonSize="lg" buttonColor="redGradient">
          {buttonText}
        </StyledButton>
      </form>
      <StyledParagraph fontSize="md">
        {signText}
        {isRightSide ? <Link to="/"> {signLink}</Link> : <Link to="/signup"> {signLink}</Link>}
      </StyledParagraph>
      <StyledParagraph fontSize="md">
        {forgotPassText}
        <Link to="/recover-password"> {forgotPassLink}</Link>
      </StyledParagraph>
      <StyledButton buttonSize="md" buttonColor="blue">
        <img src="/assets/images/google_logo.png" alt="Google Logo" />
        {t('signForm.buttonGoogle')}
      </StyledButton>
    </Container>
  );
}

export default FormContainer;
