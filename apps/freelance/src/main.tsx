import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app/app';
import HomePage from './pages/HomePage/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
