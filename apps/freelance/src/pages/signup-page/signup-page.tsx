import { StyledPage } from './signup-page.styled';
import { SignupForm, ThemeColors } from '@freelance/components';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignUpPageProps {}

export function SignUpPage(props: SignUpPageProps) {
  return (
    <ThemeProvider theme={ThemeColors}>
      <StyledPage>
        <SignupForm />
      </StyledPage>
    </ThemeProvider>
  );
}

export default SignUpPage;
