import React from 'react'
import styled from 'styled-components';
import {fontSize} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import {colors} from '../../styles/default/Colors';
import PropTypes from 'prop-types'
import {NavMobileLinkList} from './NavMobileLinkList';
import {NavMainLink} from '../../constants/navLinksMock';


const Container = styled.div`
    background: black;
    ${fontSize(14)};
    a{
      color: white;
    }
    `;

const Toggle = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;
  position: relative;
  float: left;
    ${media.md`
    display: none;
`};
`

export const Bar = styled.span`
  background: ${colors.white};
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

const NavMobile = styled.nav`
background: red;
list-style-type: none;
`


export class Navbar extends React.Component {

    static propTypes = {
        slideMenuOpened: PropTypes.bool,
        toggleSlideMenu: PropTypes.func,
    }

    render() {
        const {slideMenuOpened, toggleSlideMenu} = this.props;
        return (
            <Container>
                {/*Burger*/}
                <Toggle onClick={toggleSlideMenu}>
                    <Bar isActive={slideMenuOpened} />
                    <Bar isActive={slideMenuOpened} />
                    <Bar isActive={slideMenuOpened} />
                </Toggle>
                <NavMobile>
                    <ul>
                        <NavMobileLinkList navMainLinks={Object.values(NavMainLink)}/>
                    </ul>
                </NavMobile>
            </Container>
        )
    }
}


