import { createGlobalStyle } from 'styled-components'
import {fontFamilies as FontFamilies} from './Font';
import {backgroundColors, linkColors, textColors} from './Colors';
import {media} from './Mediaqueries';

export const GlobalStyle = createGlobalStyle`
    html{
      background: ${backgroundColors.primary};
    }
    body,
    html {
      margin: 0;
      box-sizing: border-box;
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
        
        //Stroke
        &:after, &:before{
            width: ${props => (props.strokeSize)}px;
            z-index: 9999;
            position: fixed;
            content: '';
            top: 0;
            right: 0;
            bottom: 0;
            background: ${backgroundColors.stroke};
        }
        &:before{
            left: 0;
            right: auto;
        };
    }
    
    p,
    h1,
    h2,
    h3,
    h4 {
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
    color:${linkColors.regular};
    text-decoration: none;
    ${media.sm`
      &:hover {
        color: ${linkColors.hover};
        text-decoration: none;
      }
    `}
      &:active{
      color:${linkColors.active};
      }
      &:focus{
      color:${linkColors.focus};
      }
    }
    
    button {
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