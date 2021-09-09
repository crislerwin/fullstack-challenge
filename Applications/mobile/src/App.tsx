import React from 'react';
import { ThemeProvider } from 'styled-components';
import Hello from './components/Hello';
import { theme } from './theme';

const App: React.FC = () => {
  return (

    <ThemeProvider theme={theme}>
      <Hello name="Crisler" />
      </ThemeProvider>
  )
}
export default App;