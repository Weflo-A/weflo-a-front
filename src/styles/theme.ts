import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5797FF',
    },
    secondary: {
      main: '#1F1F1F',
    },
    error: {
      main: '#ED0D00',
    },
    warning: {
      main: '#FFC107',
    },
    success: {
      main: '#3BAE2B',
    },
    info: {
      main: '#FF7C00',
    },
  },
  typography: {
    fontFamily: 'Pretendard',
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: '44px',
      fontWeight: 500,
      letterSpacing: '-0.22px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 500,
      letterSpacing: '-0.16px',
    },
    h3: {
      fontWeight: 500,
      fontSize: '24px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '20px',
    },
    h5: {
      fontWeight: 500,
      fontSize: '18px',
    },
    // B1
    body1: {
      fontWeight: 500,
      fontSize: '18px',
    },
    // B2
    body2: {
      fontWeight: 500,
      fontSize: '16px',
    },
    // C1
    caption: {
      fontWeight: 500,
      fontSize: '12px',
    },
  },
});
