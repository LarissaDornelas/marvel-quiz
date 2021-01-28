import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      font-family: 'Lato', sans-serif;
      color: #fff;
      background-color: #282342;
  
    }
    html, body {
      min-height: 100vh;
    }
    #__next {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `;

export { GlobalStyle };
