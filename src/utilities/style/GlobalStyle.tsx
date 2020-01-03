import { createGlobalStyle } from "styled-components";
import config from "./config";

const { styling } = config;

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    background:  ${styling.colors.lightGray};;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
