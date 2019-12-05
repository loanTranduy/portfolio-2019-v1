import React from 'react'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import play from '../../assets/icons/play-button.svg';
import {YoutubeComponent} from './YoutubeComponent';



export const ButtonImage = styled.button`
    overflow: hidden;
    border-radius: 40px;
    position: absolute;
    img{
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
        width: 104%;
    
        &:after{
          content: "";
          display: block;
          padding-top: 67%;
        }
        
        &:before{
        content: url(${play});
        position: absolute;
      height: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
      z-index: 1;
      transition: all .3s ease;
      filter: d
        }
        
  ${media.md`
    grid-column: span 4;
    grid-row: span 8; 
    
    &:hover{
    img{
    filter: blur(2px) brightness(90%);;
    }
        &:before{
            transform: translate(-50%, -50%) scale(1.7);
          }
    }
    
  `}
  
  ${media.xl`

  `}
`;

export class VideoBox extends React.Component {
    render() {
        const{coverVideo, coverVideoAlt, onClickVideo} = this.props;
        return (
                <ButtonImage
                    id="play"
                    aria-label="Play our introduction video"
                    onClick={onClickVideo}
                >

                    <img src={coverVideo} alt={coverVideoAlt}/>
                </ButtonImage>
        )
    }
}
