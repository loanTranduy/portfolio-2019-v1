import React from 'react'

import {Container} from '../components/SharedStyle';

export class LandingScreen extends React.Component {
    render() {
        const{navbarHeight, strokeHeight, sideNavbarHeight} = this.props;
        return (
            <Container navbarHeight={navbarHeight} strokeHeight={strokeHeight} sideNavbarHeight={sideNavbarHeight}>
                <h1>landing page</h1>
                <p>NavbarHeight: {this.props.navbarHeight}</p>
                <p>SideNavbarHeight: {this.props.sideNavbarHeight}</p>
            </Container>
        )
    }
}
