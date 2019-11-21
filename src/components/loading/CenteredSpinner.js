import React from 'react'
import styled from 'styled-components'
import {Spinner} from './Spinner'
import {colors} from '../../styles/default/Colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`

export const CenteredSpinner = () => (
    <Container>
        <Spinner color={colors.teal} />
    </Container>
)
