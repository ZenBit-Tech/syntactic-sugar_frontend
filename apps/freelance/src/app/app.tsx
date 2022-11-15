import { GoogleOAuthProvider } from '@react-oauth/google';
import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/login-page/login-page';

export function App() {
  return (
    <GoogleOAuthProvider clientId={`${process.env['NX_CLIENT_ID']}`}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </GoogleOAuthProvider>
  );
}

export default App;
