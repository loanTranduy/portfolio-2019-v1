import {css} from 'styled-components'
import {sizes} from './Mediaqueries'

export const fontSize = fontSize => `font-size: ${fontSize / 16}rem`
export const lineHeight = lineHeight => `line-height: ${lineHeight / 16}rem`


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

// Ratios use in the whole website, feel free to add some other
export const Ratios = {
    square: '100%', // 1:1
    gif: '110%', // 1:1
    landscape: '75%', // 4:3
    portrait: '139.45%', // 133.45% 3:4
    longLandscape: '66.57%', // 3:2
    longPortrait: '150%', // 2:3
    video: '56.25%', // 16:9
    videoSquare: '64%',
    panorama: '30%',
    rectangle:'50%',
    pattern:'83%',
};
