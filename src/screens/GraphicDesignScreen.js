import React from 'react'
import {Container} from '../components/SharedStyle';

export class GraphicDesignScreen extends React.Component {
    render() {
        const{navbarHeight, strokeHeight, sideNavbarHeight} = this.props;
        return (
            <Container navbarHeight={navbarHeight} strokeHeight={strokeHeight} sideNavbarHeight={sideNavbarHeight}>
                <h1>Graphic Design block</h1>
            </Container>
        )
    }
}
