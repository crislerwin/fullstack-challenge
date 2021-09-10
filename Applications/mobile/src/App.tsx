import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { Routes } from './Routes';
import { Home } from './screens/Home';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
    <ThemeProvider theme={theme}>
     <Routes />
      </ThemeProvider>
      </SafeAreaProvider>
  )
}
export default App;