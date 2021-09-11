import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { Routes } from './Routes';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#F2F2F2" />
    <ThemeProvider theme={theme}>
     <Routes />
      </ThemeProvider>
      </SafeAreaProvider>
  )
}
export default App;