import { useTranslation } from 'react-i18next';
import { Container } from './login-form.styled';
import { FormContainer, MessageContainer } from '@freelance/components';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <FormContainer
        isSignForm={true}
        isRightSide={false}
        title={t('signForm.welcome')}
        subTitle={t('signForm.signInSubtitle')}
        buttonText={t('signForm.buttonSignIn')}
        signText={t('signForm.noAcc')}
        signLink={t('signForm.signUpNow')}
        forgotPassText={t('signForm.forgotPass')}
        forgotPassLink={t('signForm.recoverNow')}
      />
      <MessageContainer
        isRightSide={true}
        title={t('signForm.title')}
        subTitle={t('signForm.subtitle')}
      />
    </Container>
  );
}

export default LoginForm;
