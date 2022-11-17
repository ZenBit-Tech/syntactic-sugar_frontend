import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/login-page/login-page';
import SignupPage from '@pages/signup-page/signup-page';
import { RecoverPassFirstPage, CheckYourEmail } from '@pages/recoverpass-first-page';

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/check-your-email" element={<CheckYourEmail />} />
          <Route path="/recover-password" element={<RecoverPassFirstPage />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
