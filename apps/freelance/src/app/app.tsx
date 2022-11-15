import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/login-page/login-page';
import RecoverPassFirstPage from '@pages/recoverpass-first-page/recoverpass-first-page';

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/recover-password" element={<RecoverPassFirstPage />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
