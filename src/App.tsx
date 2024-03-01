import './App.css';
import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <span style={{ fontWeight: '700', fontSize: '140px' }}>
          Pretendard B 700
        </span>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
