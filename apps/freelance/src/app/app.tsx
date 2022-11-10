import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExamplePage from '../pages/example-page/example-page';
import store from '../redux/example-store';
import { Provider } from 'react-redux';

import { ForgotPassword } from '../pages/forgot-password';

const StyledApp = styled.div`
  /* Your style here  */
`;

export function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ExamplePage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </Provider>
  );
}

export default App;
