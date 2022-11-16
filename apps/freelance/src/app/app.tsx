import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/login-page/login-page';
import SignupPage from '@pages/signup-page/signup-page';
import { CheckYourEmail, ForgotPassword } from '../pages/reset-password';

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/checkyouremail" element={<CheckYourEmail />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
