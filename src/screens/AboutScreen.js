import React from 'react'
import styled from 'styled-components';
import {colors} from '../styles/default/Colors';
import {Container} from '../components/SharedStyle';

const ContainerAbout = styled(Container)`
  background: ${colors.yellow};
`

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
