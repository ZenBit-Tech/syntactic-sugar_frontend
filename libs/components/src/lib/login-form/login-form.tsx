import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, LeftSide, RightSide } from './login-form.styled';
import { StyledTitle, StyledParagraph } from '../../../../../apps/freelance/src/styles/typograghy';
import { ThemeColors } from '../../../../../apps/freelance/src/styles/global.styled';
import { ThemeProvider } from 'styled-components';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={ThemeColors}>
      <Container>
        <LeftSide>
          <StyledTitle tag="h2" fontWeight={800} fontSize="lg">
            {t('signForm.leftSideHeader')}
          </StyledTitle>
          <img src="../../../assets/images/logo.png" alt={t('loginForm.logoImgAlt')} />
          <StyledParagraph fontSize="md">{t('loginForm.leftSideText')}</StyledParagraph>
          <form>
            <input type="email" name="email" placeholder={t('signForm.emailInputPlaceHolder')} />
            <input
              type="password"
              name="password"
              placeholder={t('signForm.passwordInputPlaceHolder')}
            />
            <button>{t('loginForm.buttonSignInText')}</button>
          </form>
          <StyledParagraph fontSize="md">
            {t('loginForm.noAccText')}
            <Link to='/signup'> {t('loginForm.signNowText')}</Link>
          </StyledParagraph>
          <StyledParagraph fontSize="md">
            {t('loginForm.forgotPassText')}
            <Link to=''> {t('loginForm.recoverNowText')}</Link>
          </StyledParagraph>
          <button id="GoogleBtn">
            {' '}
            <img
              src="../../../assets/images/google_logo.png"
              alt={t('loginForm.googleLogoImgAlt')}
            />{' '}
            {t('signForm.googleBtnText')}
          </button>
        </LeftSide>
        <RightSide>
          <StyledTitle tag="h3" fontWeight={700} fontSize="md">
            {t('signForm.rightSideHeader')}
          </StyledTitle>
          <StyledParagraph fontSize="md">{t('signForm.rightSideText')}</StyledParagraph>
        </RightSide>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;
