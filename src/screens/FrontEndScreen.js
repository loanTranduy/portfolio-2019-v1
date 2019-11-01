import React from 'react'
import {Container} from '../components/SharedStyle';

export class FrontEndScreen extends React.Component {
    render() {
        const{navbarHeight, strokeHeight, sideNavbarHeight} = this.props;
        return (
            <Container navbarHeight={navbarHeight} strokeHeight={strokeHeight} sideNavbarHeight={sideNavbarHeight}>
                <h1>Front end block</h1>
            </Container>
        )
    }
}
