import './App.css';
import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import NavBar from './components/common/NavBar';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
