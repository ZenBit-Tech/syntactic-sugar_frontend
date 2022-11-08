import { StrictMode } from 'react';
import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { GlobalStyle } from './global.styled';
// import ExamplePage from './pages/example-page/example-page';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Suspense fallback={'Loading...'}>
      <GlobalStyle />
      <App />
    </Suspense>
  </StrictMode>,
);
