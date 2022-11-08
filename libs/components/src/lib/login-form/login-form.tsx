import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, LeftSide, RightSide } from './login-form.styled';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation();
  return (
    <Container>
      <LeftSide>
        <h2>{t('loginForm.leftSideHeader')}</h2>
        <img src="../../../assets/images/logo.png" alt="Freelancer Logo" />
        <p>{t('loginForm.leftSideText')}</p>
        <form>
          <input type="email" name="email" placeholder={t('loginForm.emailInputPlaceHolder')} />
          <input
            type="password"
            name="password"
            placeholder={t('loginForm.passwordInputPlaceHolder')}
          />
          <button>{t('loginForm.buttonText')}</button>
        </form>
        <p>
          Don't have an account?<Link to={''}> Sign Up Now</Link>
        </p>
        <p>
          Forgot your passowrd?<Link to={''}> Recover Now</Link>
        </p>
        <Link to={''}><img src="../../../assets/images/google_button.png" alt="Google Button" /></Link>
      </LeftSide>
      <RightSide>
        <h3>{t('loginForm.rightSideHeader')}</h3>
        <p>{t('loginForm.rightSideText')}</p>
      </RightSide>
    </Container>
  );
}

export default LoginForm;
