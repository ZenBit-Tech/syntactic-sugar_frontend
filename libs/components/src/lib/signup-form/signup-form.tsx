import { useTranslation } from 'react-i18next';
import { Container } from './signup-form.styled';
import { FormContainer, ThemeColors, MessageContainer } from '@freelance/components';
import { ThemeProvider } from 'styled-components';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const { t } = useTranslation();
  
  return (
    <ThemeProvider theme={ThemeColors}>
      <Container>
        <MessageContainer
          isRightSide={false}
          title={t('signForm.title')}
          subTitle={t('signForm.subtitle')}
        />
        <FormContainer
          isRightSide={true}
          title={t('signForm.welcome')}
          subTitle={t('signForm.signUpSubtitle')}
          buttonText={t('signForm.buttonSignUp')}
          signText={t('signForm.haveAcc')}
          signLink={t('signForm.signInNow')}
        />
      </Container>
    </ThemeProvider>
  );
}

export default SignupForm;
