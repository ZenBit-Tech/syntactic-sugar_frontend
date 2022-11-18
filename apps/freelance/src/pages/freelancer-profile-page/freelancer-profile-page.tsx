// import { useTranslation } from 'react-i18next';
import { StyledPage } from './freelancer-profile-page.styled';
import { ThemeColors, ThemeBackground, Dashboard } from '@freelance/components';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FreelancerProfilePageProps {}

export function FreelancerProfilePage(props: FreelancerProfilePageProps) {
  // const { t } = useTranslation();

  return (
    <ThemeProvider theme={ThemeColors && ThemeBackground}>
      <StyledPage>
        <Dashboard>Freelancer Dashboard Profile Page</Dashboard>
      </StyledPage>
    </ThemeProvider>
  );
}

export default FreelancerProfilePage;
