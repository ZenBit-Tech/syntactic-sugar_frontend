// import styled from 'styled-components';
import { StyledApp } from './app.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ExamplePage from '../pages/example-page/example-page';
import LoginPage from '../pages/login-page/login-page';
import store from '../redux/example-store';
import { Provider } from 'react-redux';

// const StyledApp = styled.div`
//   /* Your style here  */
// `;

export function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<ExamplePage />} /> */}
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </Provider>
  );
}

export default App;
