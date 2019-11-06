import React from 'react'
import styled from 'styled-components';
import {colors, textColors} from '../../styles/default/Colors';
import {media} from '../../styles/default/Mediaqueries';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {Link} from 'react-router-dom';

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    height: 12px;
    margin-left: 8px;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }
  
  ${media.md`
  `}
  
    ${media.xl`
  `}
`;

const Text = styled.p`
  font-weight: 600;
  ${fontSize(12)};
  ${lineHeight(20)};
  text-align: center;
  color:${textColors.primary};
  
  ${media.md`
  `}
  
    ${media.xl`
  `}
`;


const Circle = styled.div`
  position: relative;
  margin: 0;
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 1.625rem;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  
  ${media.md`
  `}
  
    ${media.xl`
  `}
`;

const Button = styled(Link)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  width: 12rem;
  height: auto;
  
  ${media.md`
    &:hover{
        ${Circle}{
            width: 101%;
        }
        img{
            margin-left: 16px;
        }
    }
  `}
  
    ${media.xl`
    
  `}
`;



export class LinkWithIcon extends React.Component {
    render() {
        const{children, to, icon, alt} = this.props;
        return (
            <Button to={to}>
                <Content>
                    <Text>{children}</Text>
                    <img src={icon} alt={alt}/>
                </Content>
                {window.innerWidth > 768 &&
                <Circle/>
                }
            </Button>
        )
    }
}
