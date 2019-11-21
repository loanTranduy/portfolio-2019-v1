import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {Section} from '../components/SharedStyle';
import {backgroundColors} from '../styles/default/Colors';
import styled from 'styled-components';

export const SectionBlue = styled(Section)`
  background: ${props => props.backgroundColor};
`

export class AboutScreen extends React.Component {
    render() {
        const{navbarHeight, strokeHeight} = this.props;
        return (
                <SectionBlue height={40}
                         noOverflow
                         navbarHeight={navbarHeight}
                         backgroundColor={backgroundColors.gradiantBlue}
                         strokeHeight={strokeHeight}
                >
                    <Container>
                        <Row>
                            <Col col sm='12'>
                                <h1>About</h1>
                            </Col>
                        </Row>
                    </Container>
                </SectionBlue>

        )
    }
}
