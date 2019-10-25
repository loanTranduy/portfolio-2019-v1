import React from 'react'
import {fontSize} from '../styles/default/Mixins';
import styled from 'styled-components';
import {media} from '../styles/default/Mediaqueries';
import {colors} from '../styles/default/Colors';

export const Container = styled.div`
  background: ${colors.pink};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${fontSize(26)};
  color: white;
    ${media.md`
      background: papayawhip;
      color: black;
    `};
`

export class LandingScreen extends React.Component {
    render() {
        return (
                <Container>
                    <h1>landing page</h1>
                </Container>
        )
    }
}
