import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --red: #F93822;
    --green: #00B140;
    --black: #2D2926;
    --bg-color: #E5E1E6;
  }

  body {
    background-color: var(--bg-color);
    color: var(--black);
    -webkit-font-smoothing: antialiased;
  }

  body, -moz-user-input, button {
    font-family: 'Questrial', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
  }

  strong {
    font-family: 'Bebas Neue', cursive;
  }

  button {
    cursor: pointer;
  }
`
