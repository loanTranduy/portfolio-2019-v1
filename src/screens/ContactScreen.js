import React from 'react'
import {Container} from './LandingScreen';
import styled from 'styled-components';
import {colors} from '../styles/default/Colors';

const ContainerAbout = styled(Container)`
  background: ${colors.orange};
`

export class ContactScreen extends React.Component {
    render() {
        return (
            <ContainerAbout>
                <h1>Contact page</h1>
            </ContainerAbout>
        )
    }
}
