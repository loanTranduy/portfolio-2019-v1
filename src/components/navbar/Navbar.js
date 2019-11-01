import React from 'react'
import styled from 'styled-components';
import {backgroundColors} from '../../styles/default/Colors';
import Link from 'react-router-dom/es/Link';
import logo from '../../assets/images/logo-v1.svg'
import {NavbarMobile} from './NavbarMobile';
import {media} from '../../styles/default/Mediaqueries';
import throttle from 'lodash.throttle';
import {fontSize} from '../../styles/default/Mixins';

export const Content = styled.header`
  padding: 0 8px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${backgroundColors.navbar};
  position: fixed;
  top: ${props => (props.position)}px;
  right: ${props => (props.position)}px;
  z-index: 2;
  left: ${props => (props.position)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.md`
    align-items: flex-end;
    border-radius: 0;
    padding-top: 24px;
  `}
  ${media.xl`
    padding-right: 48px;
    justify-content: flex-start;
  `}
`;

//Logo
export const Brand = styled(Link)`
  padding: 16px;
  position: relative;
  display: flex;
  h1{
    color: black;
    margin-left: 16px;
    font-weight: 700;
    ${fontSize(16)};
    span{
    font-weight: 300;
    }
  }
  img{
      height: 40px;
      display: block;
  }
    ${media.md`
    padding: 0 16px 0 12px;
  `}
    ${media.xl`
    padding: 0 16px;
    `}
`;

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideMenuOpened: false,
        };
        this.navbar = React.createRef();
        this.updateDimensions = throttle(this.updateDimensions, 500).bind(this);
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };


    updateDimensions() {
        this.props.parentCallback(
            this.navbar.current.clientHeight
        );
    };

    toggleSlideMenu = () => {
        this.setState({
            slideMenuOpened: !this.state.slideMenuOpened,
        })
    };

    closeSlideMenu = () => {
        if (this.state.slideMenuOpened === true) {
            this.toggleSlideMenu();
        }
    };

    render() {
        const {slideMenuOpened} = this.state;
        const {position, navbarHeight, sideBarHeight} = this.props;
        const {toggleSlideMenu} = this;
        return (
            <Content ref={this.navbar} position={position}>
                {/*Logo*/}
                <Brand to="/">
                    <img src={logo}  alt={"name"}/>
                    {window.innerWidth < 768 || window.innerWidth > 1074 ?
                    <h1>Tran Duy <span>loan</span></h1>
                        : null }
                </Brand>
                {/*Burger + Mobile Nav*/}
                <NavbarMobile
                    sideBarHeight={sideBarHeight}
                    navbarHeight={navbarHeight}
                    closeSlideMenu={this.closeSlideMenu}
                    toggleSlideMenu={toggleSlideMenu}
                    slideMenuOpened={slideMenuOpened}
                />
            </Content>
        )
    }
}


