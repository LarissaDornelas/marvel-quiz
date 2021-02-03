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
    @media (max-width: 500px) {
      body {
    background-image: linear-gradient(to top, #282342 10%, #282342 100%);
}
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
