import { StyledPage } from './signup-page.styled';
import { SignupForm } from '@freelance/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignUpPageProps {}

export function SignUpPage(props: SignUpPageProps) {
  return (
    <StyledPage>
      <SignupForm />
    </StyledPage>
  );
}

export default SignUpPage;
