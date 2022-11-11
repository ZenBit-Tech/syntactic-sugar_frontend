import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';
import store from '../redux/example-store';
import { Provider } from 'react-redux';
import { SignupGoogle } from '@freelance/components';

export function App( ) {
  return (
  <GoogleOAuthProvider clientId='253619542281-miag0ub2aorap933406d1vg3bbte7j8m.apps.googleusercontent.com'> 
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignupGoogle/>}/>
      <Route path='/role' element={<h1>Hello!</h1>}/>
    </Routes>
    </BrowserRouter>
   </Provider>
  </GoogleOAuthProvider>
  );
  }

export default App;
