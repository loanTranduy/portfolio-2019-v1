import styled from 'styled-components';
import {backgroundColors, textColors} from '../styles/default/Colors';
import {fontSize, lineHeight} from '../styles/default/Mixins';
import corner from '../assets/images/corner-black.svg';
import {media} from '../styles/default/Mediaqueries';


export const TheContainer = styled.div`
--topMarginHeight: calc(${props => (props.navbarHeight)}px + ${props => (props.strokeHeight)}px);
--bodySize: calc(100vh - (${props => (props.navbarHeight)}px + calc(${props => (props.strokeHeight)}px * 2)) - ${props => (props.sideNavbarHeight)}px);
--leftMarginWidth: calc( ${props => (props.sideNavbarWidth)}px + ${props => (props.strokeHeight)}px);
  position: relative;
  min-height: var(--bodySize);
  margin-top: var(--topMarginHeight);
  overflow: hidden;
  ${media.md`
  --bodySize: calc(100vh - (${props => (props.navbarHeight)}px + calc(${props => (props.strokeHeight)}px * 2)));
    margin-left: var(--leftMarginWidth);
  `}
`;

export const Stroke = styled.div`
    height: ${props => (props.size)}px;
    z-index: 9999;
    position: fixed;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    background: ${backgroundColors.stroke};
${media.md`
    &:after, &:before{
      content:url(${corner});
      position: absolute;
      bottom: calc(${props => (props.size)}px - 4px);
      left: ${props => (props.size)}px;
      width: 10px;
      transform: rotate(-90deg);
    }
    &:before{
      left: auto;
      right: ${props => (props.size)}px;
      transform: rotate(180deg);
    }
`}
`;

export const StrokeTop = styled(Stroke)`
     top: 0;
     bottom: auto;
      &:after, &:before{
          top: calc(${props => (props.size)}px - 4px);
          bottom: auto;
          transform: rotate(0);
      }
      &:before{
      transform: rotate(90deg);
      }
`;

export const Box = styled.div`
  background: ${backgroundColors.tertiary};
  ${fontSize(16)};
  color: ${textColors.primary};
  padding: 24px 24px 32px 24px;
  border: ${props => props.border ? '4px solid black' : 'none' };
  border-radius: 27px; 
  margin-bottom: 32px;
  ${media.md`
    padding: 48px 48px 40px;
    margin-bottom: 32px;
  `}
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.md`
  `}
`;


export const Section = styled.section`
border-bottom-left-radius: 50px;
  padding-top: 32px;
  background: ${props => props.backgroundColor};
  padding-bottom: ${props => props.noOverflow ? 54 : 120}px;
  position: relative;
  overflow: ${props => props.noOverflow ? 'hidden' : 'visible'};
  &:after{
    display: ${props => props.title ? 'block' : 'none'};
    content:'Projects';
    position: absolute;
    bottom: 0;
    ${fontSize(130)};
    ${lineHeight(96)};
    color: ${textColors.secondary};
    letter-spacing: 18px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 900;
    font-style: italic;
    z-index: -1;
    display: none;
  
  }
  ${media.md`
    border-bottom-left-radius: 40px;
    padding-top: ${props => props.noOverflow ? 40 : 68}px;
    // padding-bottom: 120px;
    border-top-left-radius: 35px;
    height: calc(${props => props.height}vh - ${props => (props.navbarHeight)}px - (${props => (props.strokeHeight)}px * 2));
    &:after{
        display: block;
    }
  `}
  ${media.xl`
  `}
`

export const Flex = styled.div`

  ${media.md`
      width: 100%;
    display: flex;
    justify-content: space-between;
  `}
`;


