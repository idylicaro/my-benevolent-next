import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Great Vibes';
    src: url('fonts/GreatVibes/GreatVibes-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: cursive;
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: ${theme.colors.primary};
  }
`

export default GlobalStyle
