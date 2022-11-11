import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, LeftSide, RightSide } from './signup-form.styled';
import { StyledTitle, StyledParagraph, StyledButton } from '@freelance/components';
import { ThemeColors } from '@freelance/components';
import { ThemeProvider } from 'styled-components';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={ThemeColors}>
      <Container>
        <LeftSide>
          <StyledTitle tag="h3" fontWeight={700} fontSize="lg">
            {t('signForm.title')}
          </StyledTitle>
          <StyledParagraph fontSize="md">{t('signForm.subtitle')}</StyledParagraph>
        </LeftSide>
        <RightSide>
          <StyledTitle tag="h2" fontWeight={800} fontSize="lg">
            {t('signForm.welcome')}
          </StyledTitle>
          <img src="/assets/images/logo.png" alt="Logo" />
          <StyledParagraph fontSize="md">{t('signForm.signUpSubtitle')}</StyledParagraph>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
            <StyledButton buttonSize="lg" buttonColor="redGradient">
              {t('signForm.buttonSignUp')}
            </StyledButton>
          </form>
          <StyledParagraph fontSize="md">
            {t('signForm.haveAcc')}
            <Link to="/"> {t('signForm.signInNow')}</Link>
          </StyledParagraph>
          <StyledButton buttonSize="md" buttonColor="blue">
            <img src="/assets/images/google_logo.png" alt="Google Logo" />
            {t('signForm.buttonGoogle')}
          </StyledButton>
        </RightSide>
      </Container>
    </ThemeProvider>
  );
}

export default SignupForm;
