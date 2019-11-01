import React from 'react'
import styled from 'styled-components';
import {Container} from '../components/SharedStyle';

const ContainerAbout = styled(Container)`
`;

export class AboutScreen extends React.Component {
    render() {
        const{navbarHeight, strokeHeight, sideNavbarHeight} = this.props;
        return (
            <ContainerAbout navbarHeight={navbarHeight} strokeHeight={strokeHeight} sideNavbarHeight={sideNavbarHeight}>
                <h1>About page</h1>
            </ContainerAbout>
        )
    }
}
