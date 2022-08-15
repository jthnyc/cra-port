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
    }

    body {
        font-family: "Calibre", sans-serif;
        font-size: 16px;
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
