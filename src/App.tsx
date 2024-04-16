import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Router } from './Router';

export default function App() {
  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
    colors: {
      dark: [
        '#f0f0f0', // text
        '#acaebf',
        '#8c8fa3',
        '#666980',
        '#4d4f66',
        '#34354a',
        '#333333', // background
        '#1d1e30',
        '#0c0d21',
        '#01010a',
      ],
    },
    /*colorScheme: {
      light: {
        background: '#f0f0f0', // Light grey background
        text: '#333333', // Dark grey text for contrast
      },
      dark: {
        background: '#333333', // Dark grey background
        text: '#f0f0f0', // Light grey text for contrast
      },
    }, */
  });

  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
