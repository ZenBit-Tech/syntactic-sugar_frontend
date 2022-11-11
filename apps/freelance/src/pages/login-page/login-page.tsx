import { StyledPage } from './login-page.styled';
import { LoginForm } from '@freelance/components';
import { ThemeProvider } from 'styled-components';
import { ThemeColors } from '@freelance/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogInPageProps {}

export function LogInPage(props: LogInPageProps) {
  return (
    <ThemeProvider theme={ThemeColors}>
      <StyledPage>
        <LoginForm />
      </StyledPage>
    </ThemeProvider>
  );
}

export default LogInPage;
