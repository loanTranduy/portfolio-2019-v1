import React, {Fragment} from 'react'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {colors} from '../../styles/default/Colors';
import PropTypes from 'prop-types'
import {NavMobileLinkList} from './NavMobileLinkList';
import {NavMainLink} from '../../constants/navLinksMock';

//Burger Button
const Toggle = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;
  position: relative;
  float: right;
    ${media.md`
    display: none;
`};
`

export const Bar = styled.span`
  background: ${colors.black};
  height: 3px;
  width: 26px;
  display: block;
  border-radius: 1.5px;
  position: absolute;
  transform-origin: center;
  left: 50%;
  transform: translateX(-50%);
  transition: all .3s ease;
  &:nth-child(1) {
    top: calc(50% - 9.5px);
    transform: ${props =>
    props.isActive
        ? 'translate(-50%, 8px) rotate(45deg)'
        : 'translate(-50%, Opx) rotate(0deg)'};
  }
  &:nth-child(2) {
    top: calc(50% - 1.5px);
    opacity: ${props => (props.isActive ? '0' : '1')};
  }
  &:nth-child(3) {
    top: calc(50% + 6.5px);
    transform: ${props =>
    props.isActive
        ? 'translate(-50%, -8px) rotate(-45deg)'
        : 'translate(-50%, 0px) rotate(0deg)'};
  }
`

//Menu mobile
const NavMobile = styled.nav`
    position: absolute;
    background: white;
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    height: ${props => (props.isActive ? '100vh' : 0)};
    overflow: hidden;
    transition: height .6s;
    z-index: 9998;
    text-align: center;
    //padding: 56px; 
    $fontSize(15);
`


export class NavbarMobile extends React.Component {

    static propTypes = {
        slideMenuOpened: PropTypes.bool,
        toggleSlideMenu: PropTypes.func,
        closeSlideMenu: PropTypes.func,
    };

    render() {
        const {slideMenuOpened, toggleSlideMenu, closeSlideMenu} = this.props;
        return (
            <Fragment>

                {/*Burger*/}
                <Toggle onClick={toggleSlideMenu}>
                    <Bar isActive={slideMenuOpened} />
                    <Bar isActive={slideMenuOpened} />
                    <Bar isActive={slideMenuOpened} />
                </Toggle>

                <NavMobile isActive={slideMenuOpened}>
                    <ul>
                        <NavMobileLinkList navMainLinks={Object.values(NavMainLink)} closeSlideMenu={closeSlideMenu}/>
                    </ul>
                </NavMobile>
            </Fragment>
        )
    }
}


