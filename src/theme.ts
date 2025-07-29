
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f0f8ff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
