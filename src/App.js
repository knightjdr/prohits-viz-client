import React from 'react';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from './components/error-boundary/error-boundary-container';
import Routing from './routes/routing';
import Store from './state/store';
import theme from './style/theme';

import './App.css';

const App = () => (
  <Store>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Routing />
      </ErrorBoundary>
    </ThemeProvider>
  </Store>
);

export default App;
