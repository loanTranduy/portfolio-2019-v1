import styled from 'styled-components';
import {backgroundColors, colors} from '../styles/default/Colors';
import {fontSize} from '../styles/default/Mixins';

export const Container = styled.div`
  margin-top: calc(${props => (props.navbarHeight)}px + ${props => (props.strokeHeight)}px);
  min-height: calc(100vh - (${props => (props.navbarHeight)}px + calc(${props => (props.strokeHeight)}px * 2)) - ${props => (props.sideNavbarHeight)}px);
  background: ${colors.pink};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${fontSize(26)};
  color: white;
`

export const Stroke = styled.div`
&:after, &:before{
    height: ${props => (props.size)}px;
    z-index: 9999;
    position: fixed;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    background: ${backgroundColors.stroke};
}
&:before{
    top: 0;
    bottom: auto;
};
`