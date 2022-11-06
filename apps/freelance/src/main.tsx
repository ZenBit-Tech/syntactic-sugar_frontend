import { StrictMode } from 'react';
import { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store from './redux/example-store';
import App from './app/app';
import ExamplePage from './pages/example-page/ExamplePage';
import './i18n';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Suspense fallback={"Loading..."}>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<ExamplePage/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </Suspense>
  </StrictMode>
);
