import React, {Fragment} from 'react'
import FadeIn from "react-fade-in";
import styled from 'styled-components';
import * as legoData from "./../../assets/animation/12941-character-run-cycle.json"
import Lottie from "react-lottie";
import {colors} from '../../styles/default/Colors';
import {fontSize} from '../../styles/default/Mixins';
import {media} from './../../styles/default/Mediaqueries';

const LoadingBox = styled.div`
    background: ${colors.white};
    max-height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    animation: 1s collapse 4.2s ease-in-out;
    transform: translateY(0);
    
    @keyframes collapse {
      0% {
        visibility: visible;
        transform: translateY(0);
      }
      
      90% {
        transform: translateY(-100%);
      }
      100% {
        visibility: hidden;
      }
    }
    
    > div {
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);
    }
`

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Anime = styled.div`
  text-align: center;
  
  h2{
    margin-top: 32px;
    ${fontSize(16)};
    ${media.sm`
    margin-top: 0;
      ${fontSize(24)};
    `}
  }
`

const Name = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.sm`
    flex-direction: row;
  `}
  
     h1{
      margin-bottom: 16px;
      text-align: center;
      font-weight:700;
      white-space: nowrap;
      ${fontSize(14)};
      
      ${media.sm`
      text-align: left;
        ${fontSize(30)};
        
        &:after{
        content:'-';
        margin-left: 16px;
        }
      `}
   }
   
     li{
      text-align: center;
      font-weight:700;
      white-space: nowrap;
      ${fontSize(18)};
      
      ${media.sm`
        text-align: left;
        ${fontSize(30)};
     `}
   }
`

const List = styled.div`
  height: 18px;
  overflow: hidden;
  
  ${media.sm`
    height: 35px;
    margin-left: 16px;
  `}
  
  li{
    animation-name: change;
    animation-duration: 10s;
    animation-delay: .7s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes change {
    0%,
    12.66%,
    100% {
      transform: translateY(0);
    }
    16.66%,
    29.32% {
      transform: translateY(-100%);
    }
    33.32%,
    45.98% {
      transform: translateY(-200%);
    }
    49.98%,
    62.64% {
      transform: translateY(-300%);
    }
    66.64%,
    79.3% {
      transform: translateY(-200%);
    }
    83.3%,
    95.96% {
      transform: translateY(-100%);
    }
  }
`

export default class Loading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            done: undefined
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ done: true });
        }, 5000);
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    render() {
        return (
            <Fragment>
                {!this.state.done ? (
                    <LoadingBox>
                    <FadeIn>
                        <div>
                            <Lottie options={defaultOptions} height={300} width={300}/>
                            <Name>
                                <h1>Loan Tran Duy</h1>
                                <List>
                                    <ul>
                                        <li>Front-end Developer</li>
                                        <li>Web Designer</li>
                                        <li>Graphic Designer</li>
                                    </ul>
                                </List>
                            </Name>
                            <Anime>
                            {this.state.loading ?
                                    <h2>Loading...</h2>
                                :
                                    <h2>Done</h2>
                            }
                            </Anime>
                        </div>
                    </FadeIn>
                    </LoadingBox>
                ) : (
                    null
                )}
            </Fragment>
        )
    }
}