import React from 'react'
import {Container} from '../components/SharedStyle';

export class WebDesignScreen extends React.Component {
    render() {
        const{navbarHeight, strokeHeight, sideNavbarHeight} = this.props;
        return (
            <Container navbarHeight={navbarHeight} strokeHeight={strokeHeight} sideNavbarHeight={sideNavbarHeight}>
                <h1>Web Design block</h1>
            </Container>
        )
    }
}
