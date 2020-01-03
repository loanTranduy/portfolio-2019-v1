import React from 'react'
import styled from 'styled-components';
import {textColors} from '../../styles/default/Colors';
import {media} from '../../styles/default/Mediaqueries';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Content = styled.div`
  display: flex;
  align-items: center;
  ${media.md`
    position: relative;
    display: ${props => props.withIcon ? 'flex' : 'inline-block'};
  `}
`;

const Text = styled.p`
  font-weight: 600;
  ${fontSize(11)};
  ${lineHeight(20)};
  text-align: ${props => props.withIcon ? 'left' : 'center'};
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

const Button = styled(({ circleColor, withIcon, ...props }) => <Link {...props} />)`
  background: ${props => props.circleColor};
  font-size: inherit;
  border-radius: 50px;
  padding:${props => props.withIcon ? 0 : 8}px !important;
  
  img{
    top: ${props => props.withIcon ? 'auto' : '50%'};
    transform: translateY(${props => props.withIcon ? 0 : -50}%);
    right: ${props => props.withIcon ? 0 : -24}px;
    position: ${props => props.withIcon ? 'inherit' : 'absolute'};
    display: ${props => props.withIcon ? 'block' : 'none'};
    height: 12px;
    margin-left: 8px;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }
  
  ${media.md`
  display: ${props => props.withIcon ? 'inherit' : 'inline'} !important;
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
            right: ${props => props.withIcon ? -4 : -32}px;
        }
    }
  `}
`;

export class LinkWithIcon extends React.Component {
    static propTypes = {
        circleColor: PropTypes.string,
    };
    render() {
        const{children, to, icon, alt, circleColor, withIcon} = this.props;
        return (
            <Button to={to} circleColor={circleColor} withIcon={withIcon}>
                <Content withIcon={withIcon}>
                <Text withIcon={withIcon} circleColor={circleColor}>{children}</Text>
                <img src={icon} alt={alt}/>
                </Content>
                <Circle circleColor={circleColor}/>
            </Button>
        )
    }
}
