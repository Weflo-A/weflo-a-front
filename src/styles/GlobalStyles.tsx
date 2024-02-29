// import { createGlobalStyle } from "styled-components";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
