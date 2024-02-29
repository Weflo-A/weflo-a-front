import "./App.css";
import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
