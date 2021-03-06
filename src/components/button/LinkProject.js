import React from 'react'
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {backgroundColors} from '../../styles/default/Colors';

const LinkContainer = styled(({ small, longText, portrait, noRadiusTopLeft,noRadiusTopRight, noRadiusBottomLeft, portraitDesktop, ...props }) => <NavLink {...props} />)`
    overflow: hidden;
    border-radius: 40px;
    position: relative;
    background: url(${props => props.image}), ${props => props.background};
    background-blend-mode: color-burn;
    height: 0;
    padding-top: ${props => props.portrait ? 125 : 60}%;
    transition: .3s ease-in-out;
    animation: animate 3s linear infinite;
    grid-column: span 1;
    margin-bottom: 32px;
    
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    h2{
      letter-spacing: .5px;
      text-align: center;
      ${fontSize(32)};
      ${lineHeight(48)};
      position: absolute;
      color: black;
      top: 50%;
      left: 50%;
      transform: translate(-47%, -50%) rotate(-7deg);
      font-weight: 900;
      font-style: italic;
    }
    
    h2:first-of-type{
      transform: translate(-50%, -30%) rotate(-7deg);
      z-index: 2;
      color: white;
      background: none;
      span{
        background: ${props => props.background};
        background-blend-mode: difference;
      }
    }
    
    img{
      display: none
    }
    
    > div {
    background: ${backgroundColors.tertiary};
    }
    
  ${media.md`
    margin: ${props => props.portrait ? 0 : '0 0 24px 0'};
    padding-top: 0;
    height: 100%;
    width: 100%;
    position: relative;
    height: 0;
    padding-top: ${props => props.col};
    overflow: hidden;
    width: 100%;
    border-radius: 40px;
    background: white;
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
            mix-blend-mode: hard-light;
            transition: opacity .3s ease-in;

        }
      }

      background: url('');
      transition: all .3s ease-in-out;
    &:hover{
      div:after{
        opacity: 1;
      }
      div > img{
            filter: blur(5px);
          }
        h2{
          opacity: 1;
          transform: translate(-50%, -50%) rotate(-7deg);
        }
    }
    
    h2{
      opacity: 0;
      ${props => props.longText ? fontSize(24) : fontSize(32)};
      ${props => props.longText ? lineHeight(32) : lineHeight(48)};
      transition: all .3s ease-in-out .3s;
    }
  `}
  
  ${media.xl`
      padding-top: ${props => props.colxl};
  `}
`

export class LinkProject extends React.Component {
    static propTypes = {
        noRadiusTopRight: PropTypes.bool,
        longText: PropTypes.bool,
        portraitDesktop: PropTypes.bool,
        noRadiusBottomLeft: PropTypes.bool,
        portrait: PropTypes.bool,
        background: PropTypes.string,
        noRadiusTopLeft: PropTypes.bool,
        colxl: PropTypes.string,
        col: PropTypes.string,
        url: PropTypes.string,
        image: PropTypes.string,
        small: PropTypes.bool,
    };


    render() {
        const {name, image, portraitDesktop,col, longText, colxl, background, url, noRadiusTopLeft, portrait, small, noRadiusBottomLeft, noRadiusTopRight} = this.props;
        return (
            <LinkContainer
                longText={longText}
                portraitDesktop={portraitDesktop}
                noRadiusBottomLeft={noRadiusBottomLeft}
                image={image}
                small={small}
                col={col}
                colxl={colxl}
                portrait={portrait}
                background={background}
                to={url}
                noRadiusTopRight={noRadiusTopRight}
                noRadiusTopLeft={noRadiusTopLeft}
            >
                <div>
                    <img src={image} alt=""/>
                </div>
                <h2><span>{name}</span></h2>
            </LinkContainer>
        )
    }
}
