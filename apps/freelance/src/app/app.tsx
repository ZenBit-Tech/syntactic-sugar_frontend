import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here 
`


interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

export function App(props: RoutesProps) {
  return (
    <StyledApp>
    <NxWelcome title="Welcome freelance" />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </StyledApp>
  );
}

export default App;
