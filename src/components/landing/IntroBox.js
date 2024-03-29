import React from 'react'
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {colors, textColors} from '../../styles/default/Colors';
import {InputSound} from '../svg/InputSound';
import arrow from '../../assets/icons/right-arrow.svg'
import {LinkWithIcon} from '../button/LinkWithIcon';

const Name = styled.div`
position: relative;
display: inline;
p{
  display: inline-block;
  ${fontSize(20)};
  font-weight: 700;
  margin-bottom: 16px;
  position: relative;
  width: auto;
  
   > span:first-of-type{
    cursor: pointer;
    color:${colors.yellow};
    margin-right: 8px;
    margin-left: 8px;
    position: relative;
    
    &:after, &:before{
      z-index: 3;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      opacity: 0;
      visibility: hidden;
      transition: .1s ease-in-out;
    }
    
    --noteBottomPosition: 28px;
    --noteTriangleSize: 8px;
    
    //ToolTip
    &:after{
      content: "Yep! that’s my name.. But I don’t have any money to lend. Sorry ! ... Awkward joke I know..";
      bottom: var(--noteBottomPosition);
      display: block;
      background: ${colors.grey100};
      color: ${textColors.secondary};
      width: 150px;
      height: auto;
      padding: 8px;
      text-align: center;
      border-radius: 5px;
      ${fontSize(10)};
      ${lineHeight(12)};
      font-weight: 500;
    }
    
    &:before{
      content: "";
      width: 0;
      height: 0;
      bottom: calc(var(--noteBottomPosition) - var(--noteTriangleSize));
      border-style: solid;
      border-width: var(--noteTriangleSize) 7.5px 0 7.5px;
      border-color: ${colors.grey100} transparent transparent transparent;
    }
  }
  }
  ${media.md`
  p{
    ${fontSize(18)};
    span:first-of-type:hover{
      :after, :before{
      visibility: visible;
          opacity: .955;
      }
    }
  `}
  }
`

const Intro = styled.p`
  color:${textColors.secondary};
  ${fontSize(13)};
  ${lineHeight(19)};
  font-weight: 500;
  margin-bottom: 16px;
  
  ${media.md`
    ${fontSize(12)};
     margin-bottom: 16px;
     ${lineHeight(16)};
  `}
  
  ${media.xl`
     ${fontSize(13)};
     ${lineHeight(20)};
  `}
`

const Wrap = styled.div`
  max-width: 400px;
`

export class IntroBox extends React.Component {
    render() {
        return (
            <Wrap>
                <Name>
                    <p>My name is<span>Loan </span></p>
                    <InputSound/>
                </Name>
                <Intro>I’m a Belgian Creative Developer traveling the world to be part of awesome new teams.</Intro>
                <LinkWithIcon withIcon to="/about" icon={arrow} alt="go to about page">Learn more about me</LinkWithIcon>
            </Wrap>
        )
    }
}
