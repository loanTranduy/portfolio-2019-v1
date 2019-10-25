import React from 'react'
import styled from 'styled-components'
import {Spinner} from './Spinner'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`

export const CenteredSpinner = () => (
    <Container>
        <Spinner color="#00d1b2" />
    </Container>
)
