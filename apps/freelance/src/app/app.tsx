import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/example-store';
import { Provider } from 'react-redux';
import SignupPage from '../pages/signup-page/signup-page';

export function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </Provider>
  );
}

export default App;
