import { useTranslation } from 'react-i18next';
import { Container } from './signup-form.styled';
import { FormContainer, MessageContainer } from '@freelance/components';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <MessageContainer
        isRightSide={false}
        title={t('signForm.title')}
        subTitle={t('signForm.subtitle')}
      />
      <FormContainer
        isSignForm={true}
        isRightSide={true}
        title={t('signForm.welcome')}
        subTitle={t('signForm.signUpSubtitle')}
        buttonText={t('signForm.buttonSignUp')}
        signText={t('signForm.haveAcc')}
        signLink={t('signForm.signInNow')}
      />
    </Container>
  );
}

export default SignupForm;
