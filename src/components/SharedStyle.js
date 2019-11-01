import styled from 'styled-components';
import {backgroundColors, textColors} from '../styles/default/Colors';
import {fontSize} from '../styles/default/Mixins';
import corner from '../assets/images/corner-black.svg';


export const Container = styled.div`
  margin-top: calc(${props => (props.navbarHeight)}px + ${props => (props.strokeHeight)}px);
  min-height: calc(100vh - (${props => (props.navbarHeight)}px + calc(${props => (props.strokeHeight)}px * 2)) - ${props => (props.sideNavbarHeight)}px);
  background: ${backgroundColors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${fontSize(16)};
  color: ${textColors.primary};
`

export const Stroke = styled.div`
    height: ${props => (props.size)}px;
    z-index: 9999;
    position: fixed;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    background: ${backgroundColors.stroke};
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
`

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
`