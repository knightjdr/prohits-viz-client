import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useRoutes } from 'hookrouter';

import CookieNotification from './components/cookie-notification/cookie-notification-container';
import Navbar from './navbar/navbar-container';
import Loading from './routes/loading';
import NotFoundPage from './routes/not-found';
import routes from './routes/routes';
import Store from './state/store';
import theme from './style/theme';

import './App.css';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <Store>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Navbar />
          <main className="app">
            <Suspense fallback={<Loading />}>
              { routeResult || <NotFoundPage /> }
            </Suspense>
          </main>
          <CookieNotification />
        </Fragment>
      </ThemeProvider>
    </Store>
  );
}

export default App;
