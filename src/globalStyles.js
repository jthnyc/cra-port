import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        // for debugging purposes
        // background: #000 !important;
        // color: #0f0 !important;
        // outline: solid #f00 1px !important;
        --prussianblue: #04386c;
        --offwhite: #f8f9fa;
        --lightorange: #ff9b71;
    }

    body {
        font-family: "Calibre", sans-serif;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    #root {
        white-space: pre-line;
    }

    ul {
        list-style-type: none;
    }

    a:link {
        text-decoration: none;
    }
`;

export default GlobalStyle;
