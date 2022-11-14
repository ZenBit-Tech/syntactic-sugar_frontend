import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from '@pages/signup-page/signup-page';

export function App() {
  return (
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
  );
}

export default App;
