import React from 'react'
import {Container} from './LandingScreen';
import styled from 'styled-components';
import {colors} from '../styles/default/Colors';

const ContainerAbout = styled(Container)`
  background: ${colors.grey20};
`

export class WorkScreen extends React.Component {
    render() {
        return (
            <ContainerAbout>
                <h1>work page</h1>
            </ContainerAbout>
        )
    }
}
