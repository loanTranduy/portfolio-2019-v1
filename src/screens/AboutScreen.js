import React from 'react'
import {Container} from './LandingScreen';
import styled from 'styled-components';
import {colors} from '../styles/default/Colors';

const ContainerAbout = styled(Container)`
  background: ${colors.yellow};
`

export class AboutScreen extends React.Component {
    render() {
        return (
            <ContainerAbout>
                <h1>About page</h1>
            </ContainerAbout>
        )
    }
}
