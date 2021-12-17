import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routing from './routes/routing';
import Store from './state/store';
import theme from './style/theme';

import './App.css';

const App = () => (
  <Store>
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  </Store>
);

export default App;
