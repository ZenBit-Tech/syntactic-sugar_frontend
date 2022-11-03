import styled from 'styled-components';
import { Route,  Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  /* Your style here  */
`

export function App( ) {
  return (
    <StyledApp>
    <NxWelcome title="Welcome freelance" />
    </StyledApp> 
  );
  }

export default App;
