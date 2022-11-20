import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from '@pages/login-page/login-page';
import SignupPage from '@pages/signup-page/signup-page';
import {ProfilePage} from '@freelance/components';
import store from 'redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RecoverPassFirstPage from '@pages/recoverpass-first-page/recoverpass-first-page';

export function App() {
  return (
    <StyledApp>
      <GoogleOAuthProvider clientId={`${process.env['NX_APP_GOOGLE_KEY']}`}> 
       <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage/>} />
          <Route path="/profile_1" element={<h1>Profile page 3.1</h1>}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/role" element={<h1>hello</h1>} />
          <Route path="/recover-password" element={<RecoverPassFirstPage />} />
        </Routes>
        </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </StyledApp>
  );
}

export default App;