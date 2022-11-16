import { GoogleOAuthProvider } from '@react-oauth/google';
import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/login-page/login-page';
import SignupPage from '@pages/signup-page/signup-page';
import RecoverPassFirstPage from '@pages/recoverpass-first-page/recoverpass-first-page';

export function App() {
  return (
    <GoogleOAuthProvider clientId={`${process.env['NX_CLIENT_ID']}`}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/recover-password" element={<RecoverPassFirstPage />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </GoogleOAuthProvider>
  );
}

export default App;
