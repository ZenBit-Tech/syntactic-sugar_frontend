import { ExampleForm, ExampleHeader } from '@freelance/components';
import { StyledPage } from './example-page.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExamplePageProps {}

export function ExamplePage(props: ExamplePageProps) {
  return (
    <StyledPage>
       <ExampleHeader/>
       <ExampleForm/>
    </StyledPage>
  );
}

export default ExamplePage;