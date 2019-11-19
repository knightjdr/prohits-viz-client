import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import CookieNotification from './components/cookie-notification/cookie-notification-container';
import Navbar from './navbar/navbar-container';
import Routing from './routes/routing';
import Store from './state/store';
import theme from './style/theme';

import './App.css';

const App = () => (
  <Store>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Navbar />
        <main className="app">
          <Routing />
        </main>
        <CookieNotification />
      </Fragment>
    </ThemeProvider>
  </Store>
);

export default App;
