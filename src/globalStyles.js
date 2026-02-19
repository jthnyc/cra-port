import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        --prussianblue: #04386c;
        --prussianblue-dark: #022544;
        --prussianblue-light: #0a5c99;
        --white: #edf5e1;
        --offwhite: #f8f9fa;
        --coral: #ff6b6b;
        --coral-light: #ff8e8e;
        --cyan: #5ce1e6;
        --cyan-dark: #2eb5ad;
        --lightorange: #ff6b6b;
    }

    body {
        font-family: "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 1rem;
        line-height: 1.7;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        overscroll-behavior: none;
        background: var(--prussianblue-dark);
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Space Grotesk", sans-serif;
        font-weight: 600;
        line-height: 1.15;
        letter-spacing: -0.02em;
    }

    h1 {
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        font-weight: 700;
    }

    h2 {
        font-size: clamp(2rem, 4vw, 3.5rem);
        font-weight: 600;
    }

    h3 {
        font-size: clamp(1.25rem, 3vw, 1.75rem);
    }

    p {
        font-size: 1.0625rem;
        line-height: 1.75;
    }

    strong {
        font-weight: 600;
    }

    code {
        font-family: "SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace;
        font-size: 0.9em;
        padding: 0.125rem 0.375rem;
        background: rgba(78, 205, 196, 0.1);
        border-radius: 3px;
        color: var(--cyan);
    }

    #root {
        white-space: pre-line;
    }

    ul {
        list-style-type: none;
    }

    a:link {
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    ::selection {
        background: var(--coral);
        color: var(--prussianblue-dark);
    }
`;

export default GlobalStyle;