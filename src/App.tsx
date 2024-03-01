import './App.css';
import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { DroneList } from './components/Onboarding/DroneSearch/DroneList';
import { DroneGroupCard } from './components/Onboarding/DroneGroupSearch/DroneGroupCard';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <span style={{ fontWeight: '700', fontSize: '140px' }}>
          Pretendard B 700
        </span>
        <DroneList />
        <DroneGroupCard />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
