import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/login-page/login-page';
import SignupPage from '@pages/signup-page/signup-page';
import RecoverPassFirstPage from '@pages/recoverpass-first-page/recoverpass-first-page';
import FreelancerProfilePage from '@pages/freelancer-profile-page/freelancer-profile-page';

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/recover-password" element={<RecoverPassFirstPage />} />
          <Route path="/freelancer-profile" element={<FreelancerProfilePage />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
