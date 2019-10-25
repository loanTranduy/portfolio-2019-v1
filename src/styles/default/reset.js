import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body,
    html {
      width: auto;
      background-size: cover;
      margin: 0;
      //background: $grey10;
    }
    
    button {
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    
    
    html {
      position: relative;
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body {
      //font-family: $rb-rg;
      //font-size: 16px;
      //color: $grey100;
      //background: $white;
      //padding-bottom: 0;
      //height: 100%;
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
    button {
      border: none;
    }
    
    a {
    text-decoration: none;
      &:hover {
        text-decoration: none;
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