import { StrictMode } from 'react';
import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
// import ExamplePage from './pages/example-page/example-page';
import './i18n';
import { ThemeProvider } from 'styled-components';
import { ThemeColors, GlobalStyle } from './styles/global.styled';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Suspense fallback={"Loading..."}>
    <GlobalStyle />
      <ThemeProvider theme={ThemeColors}>
        <App />
      </ThemeProvider>
    </Suspense>
  </StrictMode>
);
