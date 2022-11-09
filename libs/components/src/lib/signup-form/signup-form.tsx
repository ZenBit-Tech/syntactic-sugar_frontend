import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, LeftSide, RightSide } from './signup-form.styled';
import { StyledTitle, StyledParagraph } from '../../../../../apps/freelance/src/styles/typograghy';
import { ThemeColors } from '../../../../../apps/freelance/src/styles/global.styled';
import { ThemeProvider } from 'styled-components';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={ThemeColors}>
      <Container>
        <LeftSide>
          <StyledTitle tag="h3" fontWeight={700} fontSize="md">
            {t('signForm.rightSideHeader')}
          </StyledTitle>
          <StyledParagraph fontSize="md">{t('signForm.rightSideText')}</StyledParagraph>
        </LeftSide>
        <RightSide>
          <StyledTitle tag="h2" fontWeight={800} fontSize="lg">
            {t('signForm.leftSideHeader')}
          </StyledTitle>
          <img src="../../../assets/images/logo.png" alt={t('signForm.logoImgAlt')} />
          <StyledParagraph fontSize="md">{t('signupForm.rightSideText')}</StyledParagraph>
          <form>
            <input type="email" name="email" placeholder={t('signForm.emailInputPlaceHolder')} />
            <input
              type="password"
              name="password"
              placeholder={t('signForm.passwordInputPlaceHolder')}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder={t('signupForm.confirmPasswordInputPH')}
            />
            <button>{t('signupForm.buttonSignUpText')}</button>
          </form>
          <StyledParagraph fontSize="md">
            {t('signupForm.haveAccText')}
            <Link to='/'> {t('signupForm.signNowText')}</Link>
          </StyledParagraph>
          <button id="GoogleBtn">
            {' '}
            <img
              src="../../../assets/images/google_logo.png"
              alt={t('signForm.googleLogoImgAlt')}
            />{' '}
            {t('signForm.googleBtnText')}
          </button>
        </RightSide>
      </Container>
    </ThemeProvider>
  );
}

export default SignupForm;
