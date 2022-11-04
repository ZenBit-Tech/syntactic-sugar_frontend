import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app/app';
import ExamplePage from './pages/example-page/ExamplePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<ExamplePage/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
