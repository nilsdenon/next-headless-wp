import { css } from 'styled-components'

export const colors = {
  grays: {
    darkGray: '#333',
    mediumGray: '#666',
    lightGray: '#ccc',
  },
  accents: {
    primary: '#f30062',
  },
}

export const dimensions = {
  space: '5px',
  space2x: '10px',
  space3x: '15px',
  space4x: '20px',
  space5x: '25px',
  space6x: '30px',
  space7x: '35px',
  space8x: '40px',
  space9x: '45px',
  space10x: '50px',
  container: {
    large: '1440px',
    medium: '1140px',
    small: '960px',
  },
}

export const breakpoints = {
  smartphone: {
    s: 480,
    m: 575,
    l: 767,
  },
  // smartphoneXxs = 320,
  // smartphoneXs = 375,
  // smartphoneS = 480,
  // smartphoneM = 575,
  // smartphoneL = tabletMin - 1,
  // tabletMin = 768,
  // tabletMax = 1024,
  // desktopS = tabletMax + 1,
  // desktopM = 1140,
  // desktopL = 1440
}

export const transitions = {
  base: 'all .25s ease-in-out',
}

export const BaseMetrics = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
`
