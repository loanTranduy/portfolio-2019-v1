import React from 'react'
import styled from 'styled-components';
import {backgroundColors} from '../../styles/default/Colors';
import {media} from '../../styles/default/Mediaqueries';

const Mask = styled.div`
    width: ${props => props.device === 'mobile' ? '200px' : '80%'};
    position: relative;
    overflow-y: scroll;
    border-radius: 10px;
    border: 4px solid white;
    box-shadow: 4px 5px 22px 0 rgba(164,181,208,0.5);
    margin: 0 auto;
    transition: all .6s ease-in-out;
    
    &:after{
      content: "";
      display: block;
      padding-top: ${props => props.device === 'mobile' ? 200 : 75}%;

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
    &:after{
     //max-width: ${props => props.device === 'mobile' ? '200px' : 'none'};
    }
    `}
`

export class Mockup extends React.Component {

    render() {
        const{cover, device} = this.props;
        return (
            <Mask device={device}>
                <img src={cover} alt=""/>
            </Mask>
        )
    }
}
