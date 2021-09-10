import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './screens/Home';
import { theme } from './theme';

const App: React.FC = () => {
  return (

    <ThemeProvider theme={theme}>
     <Home />
      </ThemeProvider>
  )
}
export default App;