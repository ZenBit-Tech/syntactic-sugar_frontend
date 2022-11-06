import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExamplePage from '../pages/example-page/example-page';

const StyledApp = styled.div`
  /* Your style here  */
`

export function App( ) {
  return (
  <StyledApp>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ExamplePage/>}/>
    </Routes>
    </BrowserRouter>
  </StyledApp> 
  );
  }

export default App;
