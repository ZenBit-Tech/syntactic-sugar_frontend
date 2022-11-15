import { useTranslation } from 'react-i18next';
import { Container, StyledPage } from './recoverpass-first-page.styled';
import { ThemeProvider } from 'styled-components';
import { ThemeColors, FormContainer, MessageContainer } from '@freelance/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecoverPassFirstPageProps {}

export function RecoverPassFirstPage(props: RecoverPassFirstPageProps) {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={ThemeColors}>
      <StyledPage>
        <Container>
          <FormContainer
            isSignForm={false}
            isRightSide={false}
            formType="recoverPass1"
            title={t('recoverPassForm.forgotPass')}
            subTitle={t('recoverPassForm.enterEmail')}
            signText={t('recoverPassForm.rememberPass')}
            signLink={t('signForm.signInNow')}
          />
          <MessageContainer
            isRightSide={true}
            isSignForm={false}
            title={t('recoverPassForm.title')}
            subTitle={t('recoverPassForm.subtitle')}
          />
        </Container>
      </StyledPage>
    </ThemeProvider>
  );
}

export default RecoverPassFirstPage;
