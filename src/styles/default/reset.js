import { createGlobalStyle } from 'styled-components'
import {fontFamilies as FontFamilies} from './Font';
import {backgroundColors, linkColors, textColors} from './Colors';

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      &::before, &::after {
        box-sizing: border-box;
      }
    }

    body,
    html {
      margin: 0;
      position: relative;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: block;
    }
    
    body{
        font-family: ${FontFamilies.mtRegular};
        font-weight: 400;
        font-size: 16px;
        color: ${textColors.primary};
        background: ${backgroundColors.primary};
    }
    
    p,
    h1,
    h2,
    h3,
    h4 {
      text-rendering: optimizeLegibility; 
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: normal;
      margin: 0;
    }
    
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
    
    a {
      display: block;
      color:${linkColors.regular};
      text-decoration: none;
    }
    
    button {
      border: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    
    .scroll-fix-ie {
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        overflow-y: scroll;
        height: 100vh;
    
        -ms-overflow-style: -ms-autohiding-scrollbar;
      }
    }

`