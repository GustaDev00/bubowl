import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { mediaMaxWidth, viewportsBase } from "@/config/utils/media-query";

const { desktop1024, isMobileOrTabletVertical } = viewportsBase;

export const GlobalStyles = createGlobalStyle`
  :root {
    --full-height: 100vh;
  }

  @supports(height: 100dvh) {
    :root {
      --full-height: 100dvh;
    }
  }
  
  * {
    font-family: var(--inter);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;
    color: ${theme.black};

    ${mediaMaxWidth(900)`
      width: 0px;
    `}

    ${mediaMaxWidth("mobile")`
      width: 0px;
    `}
  }

  html {
    font-size: calc(100vw / ${1600} * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: ${desktop1024.width}px)  {
      font-size: calc(55vw / ${desktop1024.width} * 10);
    }

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      @media (orientation: portrait) {
        font-size: calc(115vw / ${isMobileOrTabletVertical.width} * 10);
      }
    `}

    ${mediaMaxWidth("mobileVerticalHorizontal")`
      font-size: calc(100vw / ${390} * 10);
    `}

    ${mediaMaxWidth("mobileHorizontal")`
      font-size: calc(100vw / ${400} * 10);
    `}
  }

  body {
    background: #050505;
    position: relative;
  }

  main{
    overflow: hidden;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }

  .grecaptcha-badge {
    visibility: hidden;
    opacity: 0;
  }

  section{
    opacity: 1;
  }
`;
