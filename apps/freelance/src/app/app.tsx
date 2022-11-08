// import styled from 'styled-components';
// import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ExamplePage from '../pages/example-page/example-page';
import LoginPage from '../pages/login-page/login-page';
import store from '../redux/example-store';
import { Provider } from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ExamplePage />} /> */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
