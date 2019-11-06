import React from 'react'
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {backgroundColors, colors, textColors} from '../../styles/default/Colors';
import {InputSound} from '../../components/icons/InputSound';
import arrow from '../../assets/icons/right-arrow.svg'
import {Link} from 'react-router-dom';
import {LinkWithIcon} from '../button/LinkWithIcon';

const Name = styled.p`
  display: inline-block;
  ${fontSize(22)};
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
      content: "Yep! that’s my name.. But I don’t have any money to lend. Sorry ! In fact 'loan' means phoenix in vitenamese";
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
  ${media.md`
    ${fontSize(20)};
    span:first-of-type:hover{
      :after, :before{
      visibility: visible;
          opacity: .955;
      }
    }
  `}
    ${media.xl`
  `}
`

const Intro = styled.p`
  color:${textColors.secondary};
  ${fontSize(14)};
  ${lineHeight(16)};
  font-weight: 500;
  margin-bottom: 16px;
  
  ${media.md`
    ${fontSize(12)};
  margin-bottom: 16px;
     ${lineHeight(16)};
  `}
  
  ${media.xl`
     ${fontSize(12)};
     ${lineHeight(16)};
  `}
`

const LinkBlack = styled(Link)`
  color:${textColors.secondary};
  background: ${backgroundColors.secondary};
  padding: 8px 80px 8px 24px;
  ${fontSize(12)};
  ${lineHeight(16)};
  font-weight: 500;
  letter-spacing: .5px;
  margin-top: 16px;
  position: relative;
  display: inline-block;
  border-radius: 50px;
  
  &:after{
  content:url(${arrow});
  display: block;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 24px;
  }
  //
  // ${media.md`
  // padding: 0 80px 0 0;
  // color:${textColors.secondary};
  // background: transparent;
  //   ${fontSize(12)};
  //   margin-top: 8px;
  //  
  // `}
  
  ${media.xl`

  `}
`

const Wrap = styled.div`
  max-width: 350px;
  
  ${media.md`
  
  `}
  
  ${media.xl`

  `}
`

export class IntroBox extends React.Component {
    render() {
        return (
            <Wrap>
                <Name>My name is
                    <span>Loan </span>
                    <InputSound/>
                </Name>
                <Intro>I’m a Belgian Mutli Designer traveling the world to be part of awesome new web teams.</Intro>
                <LinkWithIcon to={"/about"} icon={arrow} alt="go to about page">Learn more about me</LinkWithIcon>
                {/*<LinkBlack to={"/about"} alt="go to about page">Learn more about me</LinkBlack>*/}
            </Wrap>
        )
    }
}
