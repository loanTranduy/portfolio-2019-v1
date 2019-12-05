import React from 'react'
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

const LinkContainer = styled(NavLink)`
    overflow: hidden;
    border-radius: 40px;
    position: relative;
    background: url(${props => props.image}), ${props => props.background};
    background-blend-mode: overlay;
    height: 0;
    padding-top: ${props => props.portrait ? 125 : 60}%;
    transition: .3s ease-in-out;
    
    grid-column: span 1;
    
    background-size: ${props => props.portrait ? 'auto 100%' : '100% auto'};
    background-position: center center;
    background-repeat: no-repeat;

    h2{
    transform-origin: 0 0;
      white-space: nowrap;
      min-width: 480px;
      transform: rotate(${props => props.portrait ? -90 : 0}deg);
      ${fontSize(140)};
      position: absolute; 
      
      bottom: ${props => props.portrait ? 'auto' : '-29px'};
      top: auto;
      left: ${props => props.portrait ? 32 : 'auto'}px;
      
      font-weight: 900;
      font-style: italic;
      background: ${props => props.background};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-blend-mode: overlay;
      animation: ${props => props.portrait ? 'loopBottomText' : 'loopText'} 8s infinite linear;
      
      @keyframes loopText {
          from {transform: translateX(0)}
          to {transform: translateX(-100%)}
      }
      
      @keyframes loopBottomText {
          from {transform: translateY(0) rotate(-90deg)}
          to {transform: translateY(-100%) rotate(-90deg)}
      }
    }
    
    h2:first-of-type{
      top: ${props => props.portrait ? 'auto' : '-32px'};
      margin-left: 108px;
      animation: ${props => props.portrait ? 'loopBottomText' : 'loopText'} 8s reverse infinite linear;
    }
    
    img{
      display: none
    }

  ${media.md`
      margin: ${props => props.portrait ? 0 : '0 0 24px 0'};
      padding-top: 0;
      height: 100%;
      width: 100%;
      position: relative;
      position: relative;
      height: 0;
      padding-top: ${props => props.col};
      overflow: hidden;
      width: 100%;
      left: 50%;
      border-radius: 40px;
      background: white;
      transform: translateX(-50%);
      position: relative;
    div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 102%;
        width: 100%;
        >img{
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            height: ${props => props.portraitDesktop ? '100%' : 'auto'};
            width: ${props => props.portraitDesktop ? 'auto' : '100%'};
            transition: all .3s ease-in;
        }
        
        &:after{
            content: '';
            background: ${props => props.background};
            top: 0;
            bottom: 0;
            left:0;
            right:0;
            position: absolute;
            opacity: 0;
            mix-blend-mode: hue;
        }
      }

      background: url('');
      transition: all .3s ease-in-out;
      
    &:hover{
      div:after{
      opacity: .6;
      }
      div>img{
          height: ${props => props.portraitDesktop ? '105%' : 'auto'};
            width: ${props => props.portraitDesktop ? 'auto' : '105%'};
          }
        h2{
            animation: ${props => props.portrait ? 'loopBottomText' : 'loopText'} 6s infinite linear;
            opacity: 1;
        }
    }
    
    h2{
        animation: none;
        opacity: 0;
        left: ${props => props.portrait ? -150 : 450}px;
    }
  `}
  
  ${media.xl`
  `}
`


export class LinkProject extends React.Component {
    static propTypes = {
        noRadiusBottomLeft: PropTypes.bool,
    };


    render() {
        const {name, image, portraitDesktop, col, background, url, noRadiusTopLeft, portrait, small, noRadiusBottomLeft, noRadiusTopRight} = this.props;
        return (
            <LinkContainer
                portraitDesktop={portraitDesktop}
                noRadiusBottomLeft={noRadiusBottomLeft}
                image={image}
                small={small}
                col={col}
                portrait={portrait}
                background={background}
                to={url}
                noRadiusTopRight={noRadiusTopRight}
                noRadiusTopLeft={noRadiusTopLeft}
            >
                <div>
                    <img src={image} alt=""/>
                </div>
                <h2>{name}</h2>
            </LinkContainer>
        )
    }
}
