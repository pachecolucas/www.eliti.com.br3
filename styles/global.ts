import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 14px Helvetiva, sans-serif;
  }
  html, body {
    min-height: 100vh;
  }
  h1 {
    font-family: 'Suez One', serif;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    line-height: 1.2em;
  }

  p {
    line-height: 1.7em;
    margin-bottom: 1rem;
  }


`