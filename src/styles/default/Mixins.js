import {css} from 'styled-components'
import {sizes} from './Mediaqueries'

export const fontSize = fontSize => `font-size: ${fontSize / 16}rem`

export const ieMedia = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${css(...args)};
      }
    }
  `
    return accumulator
}, {})
