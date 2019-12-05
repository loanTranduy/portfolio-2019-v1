import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';

export const VideoFullscreen = styled.section`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0,0, .8);
  margin: auto;
  
  button{
    position: absolute;
    top: -70px;
    right: 0;
    width: 40px;
    height: 100px;
    background: transparent;
    img{
      height: 20px;
    }
    transition: all .3s ease-in-out;
  }
  
  div{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    padding-top: 56%;
    
   iframe, video{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
   }
  }
  
  ${media.md`
      div{
        padding-top: 42.27%;
        width: 60%;
      }
      
      button{
      top: -40px;
      right: -40px;
          &:hover{
            img{
            transform:scale(1.3);
            }
          }
      }
  `}
  ${media.xl`

      div{
      padding-top: 30.27%;
        width:800px;
      }
  `}
`;

export class YoutubeComponent extends Component {
    static propTypes = {
        clicked: PropTypes.bool,
        handleClick: PropTypes.func.isRequired
    };

    render() {
        const src = `https://www.youtube.com/embed/${this.props
            .id}?showinfo=0&amp${this.props.clicked ? '&autoplay=1' : '&stop=0'}`;
        return (
            <VideoFullscreen
                id="video"
                className={`${this.props.clicked ? 'play' : ''}`}
                onClick={this.props.handleClick}
            >
                <div>
                    <iframe
                        title="youtube"
                        id="iframe"
                        frameBorder="0"
                        allowFullScreen
                        src={src}
                    />
                </div>
            </VideoFullscreen>
        );
    }
}
