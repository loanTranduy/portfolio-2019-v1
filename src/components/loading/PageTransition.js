import React from 'react'
import styled from 'styled-components';
import { colors} from '../../styles/default/Colors';

export const BoxPageTransition = styled.div`
    background: ${colors.black};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    border-radius: 10px;
    animation:  2s ease-in-out;
    transform: translateY(-100%);
    
    @keyframes test {
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  
`

export const ShapeOverlays = styled.svg`
    z-index: 9999;
	pointer-events: ${props => props.isOpened ? 'auto' : 'none'};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right:0;
	svg:not(:root) {
      overflow: hidden;
    }
	
    path:nth-of-type(1) {
        fill: red;
    }
    
    path:nth-of-type(2) {
        fill: blue;
    }
    
    path:nth-of-type(3) {
        fill: yellow;
    }
    
    path:nth-of-type(4) {
        fill: pink;
    }
    
        
        @keyframes testD {
    0% {
      d: path("M 0 100 C 50 100 50 100 100 100 V 100 H 0");
    }
    50% {
      d: path("M 0 0 V 100 C 50 100 50 100 100 100 V 0 H 0");
    }
    100% {
      d: path("M 0 100 C 50 100 50 100 100 100 V 100 H 0");
    }
  }
`


export default class PageTransition extends React.Component {

    render() {
        return (
            <BoxPageTransition/>
            /*
            <section>
                <ShapeOverlays viewBox="0 0 100 100" preserveAspectRatio="none" is-opened={this.props.isOpened}>
                    <path d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"/>
                </ShapeOverlays>
            </section>
            */

        )
    }
}