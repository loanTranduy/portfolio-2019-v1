import React from 'react'
import styled from 'styled-components';
import {colors} from '../../styles/default/Colors';
import Link from 'react-router-dom/es/Link';
import logo from '../../assets/images/logo-v1.svg'
import {NavbarMobile} from './NavbarMobile';

export const Content = styled.div`
  background: ${colors.white};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 900;
  transition: all 0.29s ease;
  left: ${props => (props.isActive ? 'calc(100% - 60px)' : '0')};
`

//Logo
export const Brand = styled(Link)`
  display: inline-block;
  padding: 15px;
`

export const LogoCube = styled.img`
  display: inline-block;
`

export class Navbar extends React.Component {
    state = {
        slideMenuOpened: false,
    }

    toggleSlideMenu = () => {
        this.setState({
            slideMenuOpened: !this.state.slideMenuOpened,
        })
    }


    closeSlideMenu = () => {
        if (this.state.slideMenuOpened === true) {
            this.toggleSlideMenu();
        }
    }

    render() {
        const {slideMenuOpened} = this.state;
        const {
            toggleSlideMenu,
        } = this
        return (
            <Content>
                {/*Logo*/}
                <Brand to="/">
                    <LogoCube src={logo} />
                </Brand>

                {/*Burger + Mobile Nav*/}
                <NavbarMobile
                    closeSlideMenu={this.closeSlideMenu}
                    toggleSlideMenu={toggleSlideMenu}
                    slideMenuOpened={slideMenuOpened}
                />
            </Content>
        )
    }
}


