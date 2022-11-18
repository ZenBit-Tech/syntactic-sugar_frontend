import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import './i18n';
import { ThemeProvider } from 'styled-components';
import { ThemeColors, GlobalStyle } from '@freelance/components';
import store from 'src/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Suspense fallback={'Loading...'}>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={ThemeColors}>
          <App />
        </ThemeProvider>
      </Provider>
    </Suspense>
  </StrictMode>,
);
