import React, { useState, useEffect } from 'react';

import AppRoutes from './AppRoutes';
import { lightTheme, darkTheme } from '../Lib/Themes';
import { GlobalStyles } from '../Lib/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const App: React.FunctionComponent = () => {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppRoutes />

      <button onClick={() => themeToggler()}>Switch Theme</button>
    </ThemeProvider>
  );
}

export default App;
