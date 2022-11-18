import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from '@pages/login-page/login-page';
import SignupPage from '@pages/signup-page/signup-page';
import store from 'redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RecoverPassFirstPage from '@pages/recoverpass-first-page/recoverpass-first-page';
import FreelancerProfilePage from '@pages/freelancer-profile-page/freelancer-profile-page';

export function App() {
  return (
    <StyledApp>
      <GoogleOAuthProvider clientId={`${process.env['NX_APP_GOOGLE_KEY']}`}> 
       <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/role" element={<h1>hello</h1>} />
          <Route path="/recover-password" element={<RecoverPassFirstPage />} />
          <Route path="/freelancer-profile" element={<FreelancerProfilePage />} />
        </Routes>
        </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </StyledApp>
  );
}

export default App;