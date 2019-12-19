import React from 'react'
import styled from 'styled-components';
import soundfile from '../../assets/sound/name.mp3'
import {fontSize} from '../../styles/default/Mixins';
import {textColors} from '../../styles/default/Colors';

const Sound = styled.label`
  position: absolute;
  left: -30px;
  bottom: -2px;
  z-index: 2;
  border-radius: 100%;
  
  --line: black;
  --line-width: 6px;
  --duration: .5s;
  
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  button {
      display: none;
      & + svg {
      transition: transform .3s ease-in-out;
          fill: none;
          stroke: var(--line);
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: var(--line-width);
          height: 16px;
          
          path {
              animation: var(--name) var(--duration) ease forwards;
              &:nth-child(1) {
                  --name: ${props => props.isActive ? 'shape' : 'shape-r'};
                  }
              &:nth-child(2) {
                  stroke-dashoffset: 1px;
                   --name: ${props => props.isActive ? 'small' : 'small-r'};
              }
              &:nth-child(3) {
                  stroke-dashoffset: 1px;
                  --name: ${props => props.isActive ? 'large' : 'large-r'};

              }
          }
      }
      &:hover{
       & + svg {
       transform: scale(1.1);
       }
      }
    }
  }
  
  @keyframes small {
  0%,
  30% {
      stroke-dasharray: 0 0 30px 64px;
  }
  40% {
      stroke-dashoffset: 16px;
  }
  80%,
  100% {
      stroke-dashoffset: 1px;
  }
  70% {
      stroke-dasharray: 0 43px 30px 64px;
  }
  100% {
      stroke-dasharray: 0 39px 30px 64px;
  }
  
  }
  
  @keyframes small-r {
      0% {
          stroke-dasharray: 0 39px 30px 64px;
      }
      0%,
      40% {
          stroke-dashoffset: 1px;
      }
      70% {
          stroke-dashoffset: 16px;
      }
      70%,
      100% {
          stroke-dasharray: 0 0 30px 64px;
      }
  }
  
  @keyframes large {
      0%,
      30% {
          stroke-dasharray: 0 0 50px 84px;
      }
      40% {
          stroke-dashoffset: 16px;
      }
      80%,
      100% {
          stroke-dashoffset: 1px;
      }
      70% {
          stroke-dasharray: 0 82px 32px 84px;
      }
      100% {
          stroke-dasharray: 0 78px 32px 84px;
      }
  }
  
  @keyframes large-r {
      0% {
          stroke-dasharray: 0 78px 32px 84px;
      }
      0%,
      40% {
          stroke-dashoffset: 1px;
      }
      70% {
          stroke-dashoffset: 16px;
      }
      70%,
      100% {
          stroke-dasharray: 0 0 50px 84px;
      }
  }
  
  @keyframes shape {
      0% {
          stroke-dasharray: 60px 0 184px;
          stroke-dashoffset: 0;
      }
      70% {
          stroke-dasharray: 63px 51px 184px;
          stroke-dashoffset: 21px;
      }
      100% {
          stroke-dasharray: 59px 47px 184px;
          stroke-dashoffset: 17px;
      }
  }
  
  @keyframes shape-r {
      0% {
          stroke-dasharray: 59px 47px 184px;
          stroke-dashoffset: 17px;
      }
      100% {
          stroke-dasharray: 60px 0 184px;
          stroke-dashoffset: 0;
      }
  }
`

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-block;
    margin-left: 2px;
    width: 60px;

    span {
      position: relative;
      left: -100px;
      ${fontSize(16)};
      font-weight: 400;
      font-style: italic;
      color:${textColors.primary};
      animation: ${props => props.isActive ? 'slide 1.5s forwards' : ''};
    }
    
    @keyframes slide {
          from {
            left: -100px;
          }

          to {
            left: 0;
          }
    }
`

const Wrap = styled.div`
  position: absolute;
  top: 0;
  right: -100px;
  bottom: 0;
`;

export class InputSound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            inputClick: false,
        };
    };

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    };

    toggleInput = () => {
            this.setState({checked: !this.state.checked});
            this.playAudio()
            this.setState({inputClick: !this.state.inputClick});
    };

    render() {
        return (
            <Wrap>
            <Sound isActive={this.state.checked}>
                <button
                       onClick={this.toggleInput}
                />
                <svg viewBox="0 0 108 96">
                    <path
                        d="M7,28 L35,28 L35,28 L59,8 L59,88 L35,68 L7,68 C4.790861,68 3,66.209139 3,64 L3,32 C3,29.790861 4.790861,28 7,28 Z"/>
                    <path d="M79,62 C83,57.3333333 85,52.6666667 85,48 C85,43.3333333 83,38.6666667 79,34 L49,3"/>
                    <path
                        d="M95,69 C101.666667,61.6666667 105,54.3333333 105,47 C105,39.6666667 101.666667,32.3333333 95,25 L75.5,6 L49,33"/>
                </svg>
            </Sound>
            <audio className="audio-element" onEnded={this.pause}>
                <source src={soundfile} ></source>
            </audio>
                <Wrapper isActive={this.state.inputClick}>
                    <span> /lɒæn/</span>
                </Wrapper>
        </Wrap>
        )
    }
}
