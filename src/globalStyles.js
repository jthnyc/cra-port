import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        // --prussianblue: #04386c;
        // --prussianblue-dark: #022544;
        // --prussianblue-light: #0a5c99;
        // --white: #edf5e1;
        // --offwhite: #f8f9fa;
        // --coral: #ff6b6b;
        // --coral-light: #ff8e8e;
        // --cyan: #5ce1e6;
        // --cyan-dark: #2eb5ad;
        // --lightorange: #ff6b6b;
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

    /* 
    Instructions for testing:
    1. Add data-theme attribute to your <body> tag in index.html or App.js
    2. Change between: data-theme="cashmere", data-theme="violet", data-theme="midnight"
    3. Default (no data-theme) keeps your current blue palette
    */

    /* CURRENT PALETTE (Default - no data-theme needed) */
    :root {
        --prussianblue-dark: #04386C;
        --prussianblue: #0B5394;
        --prussianblue-light: #1167B1;
        --cyan: #5ce1e6;
        --coral: #ff6b6b;
        --white: #edf5e1;
    }

    /* PALETTE 1: CASHMERE/BEIGE - Warm & Professional */
    [data-theme="cashmere"] {
        --prussianblue-dark: #C5B299;
        --prussianblue: #D4C4A8;
        --prussianblue-light: #E8DCC4;
        --cyan: #C96A52;      /* Deep terracotta */
        --coral: #E67E50;     /* Burnt orange */
        --white: #2C3333;     /* Dark text on light bg */
    }

    /* PALETTE 3: VIOLET/ROYAL - Regal & Creative */
    [data-theme="violet"] {
        --prussianblue-dark: #140A2E;
        --prussianblue: #1E0F3D;
        --prussianblue-light: #2D1B4E;
        --cyan: #A78BFA;      /* Bright violet */
        --coral: #E8B4B8;     /* Rose gold */
        --white: #F8F7FF;     /* Off-white text */
    }

    /* PALETTE 4: MIDNIGHT TEAL - Sophisticated Alternative */
    [data-theme="midnight"] {
        --prussianblue-dark: #021B26;
        --prussianblue: #042A35;
        --prussianblue-light: #0B3948;
        --cyan: #14F1D9;      /* Bright teal */
        --coral: #FF6B9D;     /* Coral pink */
        --white: #E8F4F8;     /* Soft white */
    }

    /* 
    USAGE IN APP.JS OR INDEX.HTML:
    
    To test cashmere:
    <body data-theme="cashmere">
    
    To test violet:
    <body data-theme="violet">
    
    To test midnight teal:
    <body data-theme="midnight">
    
    To go back to original:
    <body> (remove data-theme attribute)
    */
`;

export default GlobalStyle;