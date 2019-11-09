import React from 'react'
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LinkContainer = styled(Link)`
    overflow: hidden;
    border-radius: 40px;
    position: relative;
    background-image: url(${props => props.image}), ${props => props.background};
    background-blend-mode: overlay;
    width: 100%;
    height: 0;
    padding-top: ${props => props.portrait ? 150 : 60}%;
    background-size: cover;
    background-position-x: center;
    margin: 16px 0;
    transition: .3s ease-in-out;
    border-top-right-radius: ${props => props.noRadiusTopRight ? '0' : '40'}px;
    border-bottom-left-radius: ${props => props.noRadiusBottomLeft ? '0' : '40'}px;
    border-top-left-radius: ${props => props.noRadiusTopLeft ? '0' : '40'}px;
    
    h2{
    overflow: visible;
      transform: rotate(${props => props.portrait ? -90 : 0}deg);
      ${fontSize(100)};
      ${lineHeight(80)};
      position: absolute;
      bottom: ${props => props.portrait ? 'auto' : '32px'};
      top: ${props => props.portrait ? '-210px' : 'auto'};
      left: ${props => props.portrait ? 32 : 450}px;
      letter-spacing: 3.77px;
      font-weight: 900;
      font-style: italic;
      background: ${props => props.background};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-blend-mode: overlay;
      animation: ${props => props.portrait ? 'loopBottomText' : 'loopText'} 6s infinite linear;
      
      @keyframes loopText {
          from {left: 210px;}
          to {left: -750px;}
      }
      
      @keyframes loopBottomText {
          from {top: -210px;}
          to {top: 750px;}
      }
    }

  ${media.md`
      margin: ${props => props.portrait ? 0 : '0 0 24px 0'};
      padding-top: ${props => props.portrait ? 139 :(props.small ? 89 : 82)}%;
      background-image: url(${props => props.image});
      transition: all .3s ease-in-out;
      
    &:hover{
        // transform: scale(0.98);
      background-image: url(${props => props.image}), ${props => props.background};
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

    render() {
        const {name, image, background, url, noRadiusTopLeft, portrait, small, noRadiusBottomLeft, noRadiusTopRight} = this.props;
        return (
            <LinkContainer noRadiusBottomLeft={noRadiusBottomLeft}
                           image={image}
                           small={small}
                           portrait={portrait}
                           background={background}
                           to={url}
                           noRadiusTopRight={noRadiusTopRight}
                           noRadiusTopLeft={noRadiusTopLeft}
            >
                <h2>{name}</h2>
            </LinkContainer>
        )
    }
}
