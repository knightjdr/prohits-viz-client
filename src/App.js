import React from 'react';
import { ThemeProvider } from 'styled-components';

import CookieNotification from './components/cookie-notification/cookie-notification-container';
import ErrorBoundary from './components/error-boundary/error-boundary-container';
import Navbar from './navbar/navbar-container';
import Routing from './routes/routing';
import Store from './state/store';
import theme from './style/theme';

import './App.css';

const App = () => (
  <Store>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Navbar />
        <main className="app">
          <Routing />
        </main>
        <CookieNotification />
      </ErrorBoundary>
    </ThemeProvider>
  </Store>
);

export default App;
