import React from 'react'
import styled from 'styled-components';
import {backgroundColors} from '../../styles/default/Colors';
import {media} from '../../styles/default/Mediaqueries';

const Mask = styled.div`
    width: ${props => props.device === 'mobile' ? '140px' : props.side ? '400px' : '80%'};
    position: relative;
    overflow-y: scroll;
    border-radius: 10px;
    border: 2px solid white;
    box-shadow: 4px 5px 22px 0 rgba(164,181,208,0.5);
    margin: 0 auto;
    transition: all .6s ease-in-out;
    background: ${backgroundColors.darkgrey};
    transform: ${props => props.side ? 'translateX(140px)' : 'none'};
    
    &:after{
      content: "";
      display: block;
      padding-top: ${props => props.device === 'mobile' ? 207 : 70}%;
    }
    
    img{
      position: absolute;
      width: 100%;
      background:${backgroundColors.tertiary};
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    
    ${media.md`
        width: ${props => props.device === 'mobile' ? '200px' : props.side ? '400px': '80%'};
        border: 4px solid white;
        transform: ${props => props.side ? 'translateX(300px)' : 'none'};
    `}
    ${media.lg`
        width: ${props => props.device === 'mobile' ? '240px' : props.side ? '600px' : '80%'};
    `}
`

export class Mockup extends React.Component {

    render() {
        const{cover, device, side} = this.props;
        return (
            <Mask device={device} side={side}>
                <img src={cover} alt=""/>
            </Mask>
        )
    }
}
