import React from 'react';
import styled from 'styled-components/native';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import Hi from './src/components/Hi';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hi name="ModaFucka!!" />
    </ThemeProvider>
  );
}
