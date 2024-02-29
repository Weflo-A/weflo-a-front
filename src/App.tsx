import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme } from "./styles/theme";

function App() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
