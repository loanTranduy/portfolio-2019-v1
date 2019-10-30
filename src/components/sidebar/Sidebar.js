import React from 'react'
import styled from 'styled-components';
import {colors} from '../../styles/default/Colors';
import {NavSidebar} from './NavSidebar';
import throttle from 'lodash.throttle';


export const Content = styled.nav`
  background: ${colors.white};
  position: fixed;
  bottom: ${props => (props.position)}px;
  right: ${props => (props.position)}px;
  left: ${props => (props.position)}px;
  z-index: 99;
  transition: all 0.29s ease;
`


export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        const {position} = this.props;
        return (
            <Content ref={this.navbar} position={position}>
                <NavSidebar/>
            </Content>
        )
    }
}


