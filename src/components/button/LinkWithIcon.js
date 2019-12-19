import React from 'react'
import styled from 'styled-components';
import {textColors} from '../../styles/default/Colors';
import {media} from '../../styles/default/Mediaqueries';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {Link} from 'react-router-dom';

const Content = styled.div`

${media.md`
  position: relative;
    display: inline-block;
`}
`;

const Text = styled.p`
  font-weight: 600;
  ${fontSize(12)};
  ${lineHeight(20)};
  text-align: center;
  color:${textColors.primary};
  ${media.md`
      padding: 11px 0;
    margin-left: ${props => props.circleColor ? 10 : 0}px;
  `}
`;


const Circle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  margin: 0;
  width: 40px;
  height: 40px;
  background: ${props => props.circleColor};
  border-radius: 1.625rem;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  display: none;
  ${media.md`
    display: block;
  `}
`;

const Button = styled(Link)`
  background: ${props => props.circleColor};
  font-size: inherit;
  border-radius: 50px;
  padding: 8px !important;
  
  img{
    top: 50%;
    transform: translateY(-50%);
    right: -24px;
    position: absolute;
    display: none;
    height: 12px;
    margin-left: 8px;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }
  
  ${media.md`
  display: inline !important;
    img{
        display: block;
    }
  
  border-radius: none;
  width: 12rem;
  height: auto;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  padding: 0;
  background: transparent;
  width: 16.4rem;
    &:hover{
        ${Circle}{
            width: calc(100% + 40px);
        }
        img{
            right: -32px;
        }
    }
  `}
`;



export class LinkWithIcon extends React.Component {
    render() {
        const{children, to, icon, alt, circleColor} = this.props;
        return (
            <Button to={to} circleColor={circleColor}>
                <Content>
                <Text circleColor={circleColor}>{children}</Text>
                <img src={icon} alt={alt}/>
                </Content>
                <Circle circleColor={circleColor}/>
            </Button>
        )
    }
}
