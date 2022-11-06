import { ExampleButton, ExampleForm, ExampleHeader } from '@freelance/components';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExamplePageProps {}

const StyledExamplePage = styled.div`
// Your styles here
`

export function ExamplePage(props: ExamplePageProps) {
  return (
    <StyledExamplePage>
       <ExampleHeader/>
       <ExampleForm/>
       <ExampleButton/> 
    </StyledExamplePage>
  );
}

export default ExamplePage;