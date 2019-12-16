import styled from 'styled-components';
import {backgroundColors, textColors} from '../styles/default/Colors';
import {fontSize, lineHeight} from '../styles/default/Mixins';
import {media} from '../styles/default/Mediaqueries';
import {SideInfo} from './skills/side-infos/SideInfos';
import {ContentInside} from './skills/front-end/FrontEndProjectMockup';


export const TheContainer = styled.div`
--topMarginHeight: calc(${props => (props.navbarHeight)}px + ${props => (props.strokeHeight)}px);
--bodySize: calc(100vh - (${props => (props.navbarHeight)}px + calc(${props => (props.strokeHeight)}px * 2)) - ${props => (props.sideNavbarHeight)}px);
--leftMarginWidth: calc( ${props => (props.sideNavbarWidth)}px + ${props => (props.strokeHeight)}px);
--totalStrokeSize: calc(${props => (props.strokeHeight)}px + 26px);
  max-height: ${props => props.scrollBlockerActif ? 'var(--bodySize)' : 'auto'};
  position: relative;
  min-height: var(--bodySize);
  margin-top: var(--topMarginHeight);
  overflow: hidden;
  
  ${SideInfo}{
    top: var(--topMarginHeight);
    height: var(--bodySize);
  }
  ${media.md`
  max-height: var(--bodySize);
  --bodySize: calc(100vh - (${props => (props.navbarHeight)}px + ${props => (props.strokeHeight)}px + var(--totalStrokeSize)));
    margin-left: var(--leftMarginWidth);
    margin-right: var(--totalStrokeSize);
    margin-bottom: var(--totalStrokeSize);
    overflow: scroll;
    ${ContentInside}{
        min-height: var(--bodySize);
        
    }
  `}
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

export const Section = styled.section`
  border-bottom-left-radius: 50px;
  padding-top: 32px;
  background: ${props => props.backgroundColor};
  padding-bottom: ${props => props.noOverflow ? 54 : 0}px;
  position: relative;
  height: auto;
  overflow: visible;
  &:after{
    content:"Projects";
    position: absolute;
    bottom: -63px;
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
    overflow: ${props => props.noOverflow ? 'hidden' : 'visible'};
    border-bottom-left-radius: 40px;
    padding-top: ${props => props.noOverflow ? 40 : 68}px;
    border-top-left-radius: 35px;
    height: calc(${props => props.height}vh - ${props => (props.navbarHeight)}px - (${props => (props.strokeHeight)}px * 2));
    &:after{
      display: ${props => props.title ? 'block' : 'none'};
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


