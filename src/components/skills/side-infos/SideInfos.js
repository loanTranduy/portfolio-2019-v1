import React from 'react'
import styled from 'styled-components';
import {media} from '../../../styles/default/Mediaqueries';
import cornerWhite from '../../../assets/images/corner.svg';
import {fontSize, lineHeight} from '../../../styles/default/Mixins';
import {backgroundColors} from '../../../styles/default/Colors';
import {IconsWithLabel} from './skills/IconsWithLabel';
import {BoxIconsWithLabel} from './software/BoxIconsWithLabel';
import {LinkWithIcon} from '../../button/LinkWithIcon';
import arrow from '../../../assets/icons/right-arrow.svg'
import arrowHead from '../../../assets/icons/arrow-head.svg'
import throttle from 'lodash.throttle';

export const SideInfo = styled.div`
  background: ${backgroundColors.navbar};
  position: fixed;
  z-index: 1;
  right: 35px;
  top: 82px;
  bottom:0;
  max-width: 80vw;
  height: 100vh;
  padding: 16px 32px 16px 48px;
  transform:translateX(${props => props.active ? 10 : 102}%);
  transition: transform .6s ease-in-out;
  &:after, &:before{
      content:url(${cornerWhite});
      position: absolute;
      bottom: 106px;
      left: -40px;
      width: 40px;
      transform: rotate(180deg);
    }
    &:before{
      bottom: auto;
      top: -3px;
      transform: rotate(90deg);
    }
    
    button{
      background: ${backgroundColors.navbar};
      transform-origin: top left;
      left: -30px;
      top: 260px;
      position: fixed;
      transform: rotate(-90deg);
      padding: 8px 44px 8px 16px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      font-weight: 600;
      ${fontSize(14)};
      
      img{
      transition: transform .6s ease-in-out;
        position: absolute;
        top: 41%;
        transform: rotate(${props => props.active ? 90 : -90}deg);
        right:16px;
        height: 10px;
      }
      
      --cornerSize: -10px;
      &:after, &:before{
      content:url(${cornerWhite});
      position: absolute;
      bottom: -2px;
      left: var(--cornerSize);
      width: calc(var(--cornerSize) * -1);
      transform: rotate(180deg);
    }
    &:before{
      right: var(--cornerSize);
      left: auto;
      transform: rotate(-90deg);
    }
    }
    
    a{
      display: none;
    }
    ${media.md`
    padding: 32px 32px 0 64px;
    transform:translateX(${props => props.active ? 0 : 100}%);
    a{
      display: block;
    }
    `}
      ${media.xl`
      button{
        display: none;
      }

  `}
  
  h1{
    font-weight: 700;
    ${fontSize(19)};
    margin-bottom: 32px;
    margin-top: 0;
    
    ${media.md`
        margin-top: 16px;
        ${fontSize(22)};
        margin-bottom: 56px;
    `}
  }
  
  h2{
    font-weight: 700;
    ${fontSize(12)};
    ${lineHeight(18)};
    margin-bottom: 16px;
    ${media.md`
    ${fontSize(14)};
    margin-bottom: 24px;
    `}
  }

  a{
  position: fixed;
  bottom: 120px;
  left: 65px;
  }
`

export class SideInfos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideInfosVisible: false
        };
        this.sideInfo = React.createRef();
        this.sendData = throttle(this.sendData, 500).bind(this);
    };

    componentDidMount() {
        this.sendData();
    };

    sendData = () => {
        this.props.parentCallback(this.sideInfo.current.clientWidth);
    };

    toggleSideInfos = () => {
       this.setState ({
            sideInfosVisible: !this.state.sideInfosVisible
        })
    };

    render() {
        const{title, communication, skills, cta, ctaTo, software, softwareTitle, circleColor, communicationSoftware}= this.props;
        return (

            <SideInfo ref={this.sideInfo} active={this.state.sideInfosVisible}>
                    <button onClick={this.toggleSideInfos}>
                        {title}
                        <img src={arrowHead} alt="collapse infos box"/>
                        </button>
                    <section>
                        <h1>{title}</h1>
                        <IconsWithLabel skillsFrontEnd={skills}/>
                        <BoxIconsWithLabel softwaresFrontEnd={software} title={softwareTitle}/>
                        {communication &&
                        <BoxIconsWithLabel softwaresFrontEnd={communicationSoftware} title={communication}/>
                        }
                        <LinkWithIcon to={ctaTo} icon={arrow} circleColor={circleColor}>{cta}</LinkWithIcon>
                    </section>
            </SideInfo>
        )
    }
}
