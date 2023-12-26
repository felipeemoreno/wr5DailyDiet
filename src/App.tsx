import React from 'react';

import Home from './screens/Home';
import {ThemeProvider} from 'styled-components';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
