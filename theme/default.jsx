import { css } from 'styled-components'

export const colors = {
  grays: {
    darkGray: '#333',
    mediumGray: '#9999',
    lightGray: '#EDF2F7',
  },
  accents: {
    primary: '#f30062',
  },
}

export const dimensions = {
  fontSizeM: '16px',
  base5: {
    _1x: '5px',
    _2x: '10px',
    _3x: '15px',
    _4x: '20px',
    _5x: '25px',
    _6x: '30px',
    _7x: '35px',
    _8x: '40px',
    _9x: '45px',
    _10x: '50px',
  },
  base4: {
    _1x: '4px',
    _2x: '8px',
    _3x: '12px',
    _4x: '16px',
    _5x: '20px',
    _6x: '24px',
    _7x: '28px',
    _8x: '32px',
    _9x: '36px',
    _10x: '40px',
  },
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
  tabletMin: 768,
  tabletMax: 1024,
  desktop: {
    s: 1140,
    m: 1280,
    l: 1440,
  },
}

export const transitions = {
  base: 'all .25s ease-in-out',
}

export const BaseMetrics = css`
  display: flex;
  margin: 0 auto;
  width: 100%;
  padding-left: ${dimensions.base5._4x};
  padding-right: ${dimensions.base5._4x};
`
