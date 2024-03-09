// import { createGlobalStyle } from 'styled-components';
import { Global, css } from '@emotion/react';
import colors from 'src/constants/colors';
import 'src/fonts/Font.css';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
    font-weight: 500;
    line-height: 150%;
  }
  body {
    background-color: ${colors.basic100};
    margin: 3.25rem 5rem 0rem;
    box-sizing: border-box;
  }
  .page {
    width: 100%;
    padding-top: 3.25rem;
    padding-left: 16.25rem;
    margin-bottom: 150px;
  }
`;
const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
