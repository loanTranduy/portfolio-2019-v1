import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {Flex, Section, TheContainer} from '../components/SharedStyle';
import {Hello} from '../components/hello/Hello';
import {IntroBox} from '../components/landing/IntroBox';
import {TownTransparent} from '../components/landing/TownTransparent';
import {backgroundColors} from '../styles/default/Colors';

export class AboutScreen extends React.Component {
    render() {
        const{navbarHeight, strokeHeight} = this.props;
        return (
                <Section height={40}
                         noOverflow
                         navbarHeight={navbarHeight}
                         backgroundColor={backgroundColors.gradiant}
                         strokeHeight={strokeHeight}>
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
                </Section>

        )
    }
}
