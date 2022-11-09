import { StyledPage } from './loginPage.styled';
import { LoginForm } from '@freelance/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogInPageProps {}

export function LogInPage(props: LogInPageProps) {
  return (
    <StyledPage>
      <LoginForm/>
    </StyledPage>
  );
}

export default LogInPage;
