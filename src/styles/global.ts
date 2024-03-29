import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: #fff;
        --gray: #F4F4F4;
        --gray-icon: #c4c4c4;
        --text-title: #000000;
    }

    html {

        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    html, body {
        width: 100vw;
        height: 100vh;
    }

    header {
        font-family: Raleway;
    }

    body, input, textarea, button {
        font-family: Poppins;
        font-weight: 500;
    }

    button {
        cursor: pointer;
        background: 0;
        border: 0;
    }

    h1, strong {
        font-weight: 700;
    }

    h2, h3 {
        font-weight: 600;
    }

    li {
        list-style: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #000;
    }

`

