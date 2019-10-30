import React from 'react'
import styled from 'styled-components';
import {backgroundColors} from '../../styles/default/Colors';
import Link from 'react-router-dom/es/Link';
import logo from '../../assets/images/logo-v1.svg'
import {NavbarMobile} from './NavbarMobile';
import {media} from '../../styles/default/Mediaqueries';
import throttle from 'lodash.throttle';


export const Content = styled.header`
  background: ${backgroundColors.navbar};
  position: fixed;
  top: ${props => (props.position)}px;
  right: ${props => (props.position)}px;
  z-index: 2;
  transition: all 0.29s ease;
  left: ${props => (props.position)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    ${media.md`
    padding-right: 48px;
  `}
`;

//Logo
export const Brand = styled(Link)`
  display: block;
  padding: 16px;
  img{
      height: 40px;
      display: block;
  }
  ${media.md`
    margin-right: 200px;
  `}
`;

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideMenuOpened: true,
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
        const {position} = this.props;
        const {toggleSlideMenu} = this;
        return (
            <Content ref={this.navbar} position={position}>
                {/*Logo*/}
                <Brand to="/">
                    <img src={logo}  alt={"name"}/>
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


