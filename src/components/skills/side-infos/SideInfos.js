import React from 'react'
import styled from 'styled-components';
import {media} from '../../../styles/default/Mediaqueries';
import cornerWhite from '../../../assets/images/corner.svg';
import {fontSize, lineHeight} from '../../../styles/default/Mixins';
import {backgroundColors, colors, textColors} from '../../../styles/default/Colors';
import {IconsWithLabel} from './skills/IconsWithLabel';
import {BoxIconsWithLabel} from './software/BoxIconsWithLabel';
import {LinkWithIcon} from '../../button/LinkWithIcon';
import arrow from '../../../assets/icons/right-arrow.svg'
import arrowHead from '../../../assets/icons/arrow-head.svg'
import throttle from 'lodash.throttle';
import {Link} from 'react-router-dom';

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
  
  ${media.md`
    padding: 32px 0 0 56px;
  `}
  ${media.lg`
  padding: 32px 40px 0 24px;
  `}
  ${media.xl`
    padding: 32px 32px 0 64px;
  `}
  &:after, &:before{
      content:url(${cornerWhite});
      position: absolute;
      bottom: 0;
      left: -40px;
      width: 40px;
      transform: rotate(180deg);
    }
    &:before{
      bottom: auto;
      top: -3px;
      transform: rotate(90deg);
    }
    
  section{
    overflow:scroll;
    height: 100%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    ${media.md`
        max-width: 290px;
    `}
    
    ${media.lg`
        max-width: 320px;
    `}
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
    ${fontSize(14)};
    margin-bottom: 24px;
    
    ${media.md`
        margin-top: 24px;
        ${fontSize(19)};
        margin-bottom: 56px;
    `}
  }
  
  //Subtitle
  h2{
    font-weight: 700;
    ${fontSize(12)};
    ${lineHeight(18)};
    margin-bottom: 8px;
    margin-top: 16px;
    
    ${media.md`
        margin-top: 32px;
        margin-bottom: 16px;
        ${fontSize(14)};
        margin-bottom: 16px;
    `}
  }  
`

const Position = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 24px;
  p{
    ${fontSize(10)};
    font-weight: 500;
    width: 100px;
    display: flex;
  }
  
  h2{
    ${lineHeight(13)};
    margin: 0;
  }
  
  span{
   display: none;
  }
  
  ${media.md`
    margin-bottom: 56px;
    p{
        ${fontSize(12)};
        width: auto;
    }
    
    span{
        display: block;
        padding: 0 6px 0 2px;
    }
  
  `}
  
  ${media.xl`

  `}
`

const List = styled.ul`
  li{
    margin-bottom: 4px;
    position: relative;
  
      a{
        ${lineHeight(16)};
        ${fontSize(10)};
        color: ${textColors.primary};
        font-weight: 600;
        display: inline;
        position: relative;
        
        img{
          position: absolute;
          right: -20px;
          bottom: 2px;
          height: 8px;
        }
      }
    }
  
  ${media.md`
  li{
    margin-bottom: 8px;
    
    img{
          top: 50%;
          transform: translateY(-50%);
          transition: all .3s ease;
          bottom: auto;
          height: 10px;
        }
  
    a{
        ${lineHeight(22)};
        ${fontSize(13)};
        transition: all .3s ease;
        &:hover{
        opacity: .6;
        img{
         transform: translate(-5px,-50%);
        }
        }
    }
    }
    
  `}
  
  ${media.xl`

  `}
`

const Text = styled.p`
  color: ${textColors.tertiary};
  ${lineHeight(16)};
  ${fontSize(11)};
  
  ${media.md`
  ${lineHeight(22)};
  ${fontSize(13)};
  
  `}
  
  ${media.xl`

  `}
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
        const{title,
            position,
            positionDate,
            communication,
            description,
            skills,
            cta,
            ctaTo,
            software,
            softwareTitle,
            circleColor,
            communicationSoftware,
            tasks,
            softwareUsed,
            skillLinks,
            projectTitle,
            sixItems,
        }= this.props;
        return (

            <SideInfo ref={this.sideInfo} active={this.state.sideInfosVisible}>
                    <button onClick={this.toggleSideInfos}>
                        {title}{projectTitle}
                        <img src={arrowHead} alt="collapse infos box"/>
                    </button>
                    <section>
                        <div>
                            {title &&
                                <h1>{title}</h1>
                            }

                            {position &&
                                <Position>
                                    <p>{positionDate}<span> _________ </span></p>
                                    <h2>{position}</h2>
                                </Position>
                            }

                            {projectTitle &&
                                <h2>{projectTitle}</h2>
                            }


                            {description &&
                                <Text>{description}</Text>
                            }

                            {tasks &&
                                <>
                                    <h2>Task</h2>
                                    <List>
                                        {tasks.map(
                                            (task, id) =>(
                                            <li key={id}><Text>{task}</Text></li>
                                            )
                                        )}
                                        {skillLinks && !!skillLinks.length &&
                                            <>
                                            {skillLinks.map(
                                                (skillLink, id) => (
                                                    <li key={id}>
                                                        <Link to={skillLink.to}>
                                                            See my
                                                            <span> {skillLink.label} </span>
                                                            tasks @{projectTitle}
                                                            <img src={arrowHead} alt="link to"/>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                            </>
                                        }
                                    </List>
                                </>
                            }

                            {skills &&
                                <IconsWithLabel skillsFrontEnd={skills}/>
                            }

                            {software &&
                                <BoxIconsWithLabel
                                    softwaresFrontEnd={software}
                                    title={softwareTitle}
                                />
                            }

                            {softwareUsed &&
                                <BoxIconsWithLabel softwaresFrontEnd={softwareUsed} title='Software' sixItems={sixItems}/>
                            }

                            {communication && !!communicationSoftware.length &&
                                <BoxIconsWithLabel softwaresFrontEnd={communicationSoftware} title={communication} />
                            }
                        </div>

                        {cta &&
                            <LinkWithIcon to={ctaTo} icon={arrow} circleColor={circleColor}>{cta}</LinkWithIcon>
                        }
                    </section>
            </SideInfo>
        )
    }
}
