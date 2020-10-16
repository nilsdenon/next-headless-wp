import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { colors, transitions } from '../theme/default'

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
     /* Adjust font size */
     font-size: 100%;
    -webkit-text-size-adjust: 100%;
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  }
  html,
  body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-weight: 800;
  }

  a {
  color: ${colors.grays.darkGray};
  transition: ${transitions.base};
  }

  a,
  a:hover,
  a:focus,
  a:active {
  text-decoration: none;
  }
  img {
    max-width: 100%;
    align-self: center;
  }
`
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
