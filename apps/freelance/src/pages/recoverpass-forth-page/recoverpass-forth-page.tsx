import { StyledPage, Container } from './recoverpass-forth-page.styled';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { ThemeColors, ThemeBackground, SideContainer, StyledButton } from '@freelance/components';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecoverPassForthPageProps {}

export function RecoverPassForthPage(props: RecoverPassForthPageProps) {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const redirect = () => {
    navigation('/');
  };

  return (
    <ThemeProvider theme={ThemeColors && ThemeBackground}>
      <StyledPage>
        <Container>
          <SideContainer title={t('recoverPassForm.title')} subTitle={t('recoverPassForm.resetSuccess')}>
            <StyledButton buttonSize="md" buttonColor="redGradient" onClick={redirect}>
              {t('recoverPassForm.homePageBtn')}
            </StyledButton>
          </SideContainer>
        </Container>
      </StyledPage>
    </ThemeProvider>
  );
}

export default RecoverPassForthPage;
