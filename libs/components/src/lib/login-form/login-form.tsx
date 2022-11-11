import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, LeftSide, RightSide } from './login-form.styled';
import { ThemeProvider } from 'styled-components';
import { ThemeColors } from '@freelance/components';
import { StyledTitle, StyledParagraph, StyledButton } from '@freelance/components';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={ThemeColors}>
      <Container>
        <LeftSide>
          <StyledTitle tag="h2" fontWeight={800} fontSize="lg">
            {t('signForm.welcome')}
          </StyledTitle>
          <img src="/assets/images/logo.png" alt="logo" />
          <StyledParagraph fontSize="md">{t('signForm.signInSubtitle')}</StyledParagraph>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <StyledButton buttonSize="lg" buttonColor="redGradient">
              {t('signForm.buttonSignIn')}
            </StyledButton>
          </form>
          <StyledParagraph fontSize="md">
            {t('signForm.noAcc')}
            <Link to="/signup"> {t('signForm.signUpNow')}</Link>
          </StyledParagraph>
          <StyledParagraph fontSize="md">
            {t('signForm.forgotPass')}
            <Link to="/recover-password"> {t('signForm.recoverNow')}</Link>
          </StyledParagraph>
          <StyledButton buttonSize="md" buttonColor="blue">
            <img src="/assets/images/google_logo.png" alt="Google Logo" />
            {t('signForm.buttonGoogle')}
          </StyledButton>
        </LeftSide>
        <RightSide>
          <StyledTitle tag="h3" fontWeight={700} fontSize="lg">
            {t('signForm.title')}
          </StyledTitle>
          <StyledParagraph fontSize="md">{t('signForm.subtitle')}</StyledParagraph>
        </RightSide>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;
