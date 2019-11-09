import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {Flex, Section} from '../components/SharedStyle';
import {Hello} from '../components/hello/Hello';
import {IntroBox} from '../components/landing/IntroBox';
import {TownTransparent} from '../components/landing/TownTransparent';
import {backgroundColors} from '../styles/default/Colors';
import styled from 'styled-components';


const SectionBlue = styled(Section)`
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
                                <Hello/>
                                <Flex>
                                    <IntroBox/>
                                    {window.innerWidth > 768 &&
                                    <TownTransparent/>
                                    }
                                </Flex>
                            </Col>
                        </Row>
                    </Container>
                </SectionBlue>

        )
    }
}
