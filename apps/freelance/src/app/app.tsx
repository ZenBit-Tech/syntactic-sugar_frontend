import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from '@pages/login-page/login-page';
import SignupPage from '@pages/signup-page/signup-page';
import store from '../redux/example-store';
import { GoogleOAuthProvider } from '@react-oauth/google';

export function App() {
  return (
    <StyledApp>
      <GoogleOAuthProvider clientId ="253619542281-miag0ub2aorap933406d1vg3bbte7j8m.apps.googleusercontent.com"> 
       <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/role" element={<h1>hello</h1>} />
        </Routes>
        </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </StyledApp>
  );
}

export default App;