import { createGlobalStyle } from "styled-components";

import { IThemeProps } from "./theme";

const GlobalStyle = createGlobalStyle<IThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    background: ${(props) => props.theme.backgroundColors.main};
  }

  h1, h2, h3, h4, h5,h6, a, ul, li, span, p {
    color: ${(props) => props.theme.textColors.primary};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  p, a, ul, li {
    font-size: ${(props) => props.theme.fontSizes.md}
  }

  h1, h2, h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }

  h1 {
    font-weight: 600;
  }

  h2, h3 {
    font-weight: 500;
  }

  // Open sidebar button styles
  .openSidebar {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: none;
    background: ${(props) => props.theme.backgroundColors.delete};
    

    img {
      width: 60%;
      filter: grayscale(1) invert(1);
    }

    border-radius: 50%;
    border: none;
  }


  @media (max-width: 815px) {
    .openSidebar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  //##########################

  .hidden {
    display: none;
  }

`;

export default GlobalStyle;
