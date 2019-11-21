import React, {Fragment} from 'react'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {backgroundColors, colors} from '../../styles/default/Colors';
import PropTypes from 'prop-types'
import {NavMobileLinkList} from './NavMobileLinkList';
import {NavMainLink} from '../../constants/nav-links-mock';
import {fontSize} from '../../styles/default/Mixins';
import {SocialFooter} from './SocialFooter';

//Burger Button
const Toggle = styled.div`
  padding: 16px;
  margin: 16px;
  border: 4px solid black;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  float: right;
`

export const Bar = styled.span`
  background: ${colors.black};
  height: 3px;
  width: 18px;
  display: block;
  position: absolute;
  transform-origin: center;
  left: 50%;
  transform: translateX(-50%);
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
  &:nth-child(1) {
    top: ${props => props.isActive ? 
    'calc(50% - 11px)'
    : 'calc(50% - 7px)'
    };
    transform: ${props =>
    props.isActive
        ? 'translate(-50%, 10px) rotate(45deg)'
        : 'translate(-50%, Opx) rotate(0deg)'};
  }
  &:nth-child(2) {
    top: calc(50% - 1.5px);
    opacity: ${props => (props.isActive ? '0' : '1')};
  }
  &:nth-child(3) {
  right:${props =>
    props.isActive ? "auto" : "3px"};
  left: ${props =>
    props.isActive ? "50%" : "auto"};
  width: ${props =>
    props.isActive ? 18 : 9}px};
  top: ${props => props.isActive ?
    'calc(50% + 7px)'
    : 'calc(50% + 4.5px)'
    };
    transform: ${props =>
    props.isActive
        ? 'translate(-50%, -8px) rotate(-45deg)'
        : 'translate(-50%, 0px) rotate(0deg)'};
  }
`

//Menu mobile
const NavMobile = styled.nav`
    overflow: hidden;
    border-bottom-left-radius: ${props => (props.isActive ? 0 : 20)}px;
    border-bottom-right-radius: ${props => (props.isActive ? 0 : 20)}px;
    position: absolute;
    background: ${backgroundColors.navbar};
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    height: ${props => (props.isActive ? 'calc(100vh - ' + props.navbarHeight + 'px )' : 0)};
    transition: height .6s;
    z-index: 4;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${fontSize(20)};
    ${media.md`
        overflow: visible;
        height: auto;
        position: initial;
        display: inline-block;
    `}
    ${media.lg`
        margin-left: 70px;
    `}
    
    ${media.xl`
        margin-left: 100px;
    `}
    
    >ul{
        margin-top: 56px;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li{
          opacity:${props => props.isActive ? 1 : 0};
          transform: translateX(${props => props.isActive ? 0 : -20}px);
        }
        
        li:nth-child(1){
        transition: all .3s ease-in-out .3s;
        }
            li:nth-child(2){
        transition: all .3s ease-in-out .4s;
        }
            li:nth-child(3){
        transition: all .3s ease-in-out .5s;
        }
            li:nth-child(4){
        transition: all .3s ease-in-out .6s;
        }
        
        ${media.md`
            width: calc(100vw - 120px);
            margin-top: 0;
           li:nth-child(1), li:nth-child(2), li:nth-child(3), li:nth-child(4){
               transition: none;
               opacity: 1;
               transform: translateX(0);
            }
           height: auto;
           flex-direction: row;
        `}
        ${media.lg`
         width: auto;
        `}
}
`

export class NavbarMobile extends React.Component {

    static propTypes = {
        slideMenuOpened: PropTypes.bool,
        toggleSlideMenu: PropTypes.func,
        closeSlideMenu: PropTypes.func,
        navbarHeight: PropTypes.number,
        sideBarHeight: PropTypes.number
    };

    render() {
        const {slideMenuOpened, toggleSlideMenu, closeSlideMenu,navbarHeight, sideBarHeight} = this.props;
        return (
            <Fragment>
                {window.innerWidth < 768 &&
                    <Toggle onClick={toggleSlideMenu}>
                        <Bar isActive={slideMenuOpened}/>
                        <Bar isActive={slideMenuOpened}/>
                        <Bar isActive={slideMenuOpened}/>
                    </Toggle>
                }

                <NavMobile isActive={slideMenuOpened} navbarHeight={navbarHeight} sideBarHeight={sideBarHeight}>
                    <ul>
                        <NavMobileLinkList navMainLinks={Object.values(NavMainLink)} closeSlideMenu={closeSlideMenu} isActive={slideMenuOpened}/>
                    </ul>
                    {window.innerWidth < 768 &&
                    <SocialFooter/>
                    }
                </NavMobile>

            </Fragment>
        )
    }
}


