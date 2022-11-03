import { Header } from '@freelance/components';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomePageProps {}

const StyledHomePage = styled.div`
background-color: yellow;
`

export function HomePage(props: HomePageProps) {
  return (
    <StyledHomePage>
       <Header/>
    </StyledHomePage>
  );
}

export default HomePage;