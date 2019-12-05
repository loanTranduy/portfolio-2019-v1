import React, {Fragment} from 'react'
import {Flex, Section} from '../components/SharedStyle';
import {IntroBox} from '../components/landing/IntroBox';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {Hello} from '../components/landing/hello/Hello';
import {TownTransparent} from '../components/landing/TownTransparent';
import {LinkProject} from '../components/button/LinkProject';
import Primadonna from '../assets/images/project/primadonna/primadonna-cover.jpg'
import {backgroundColors, skillsColors} from '../styles/default/Colors';
import {LinkClient} from '../components/button/LinkClient';
import sideLogo from '../assets/images/project/3d-side/3d-side-logo.svg'
import elleLogo from '../assets/images/project/ELLE_Magazine_Logo.svg'
import marieJo from '../assets/images/project/marie-jo/marie-jo-cover.jpg'
import front from '../assets/icons/front.svg'
import web from '../assets/icons/layout.svg'
import graphic from '../assets/icons/pencil.svg'
import all from '../assets/icons/eye.svg'
import andresSarda from '../assets/images/project/andress-sarda/andres-sarda.jpg'
import {Town} from '../components/landing/Town';
import
    throttle from 'lodash.throttle';
import styled from 'styled-components';


export const SectionTop = styled(Section)`
`

export class LandingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleTown: false,
        };
        this.updateDimensions = throttle(this.updateDimensions, 500).bind(this);
    };


    updateDimensions() {
        if (window.innerWidth < 768) {
            this.setState({visibleTown: false});
        } else {
            this.setState({visibleTown: true});
        }
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    render() {
        const {visibleTown} = this.state;
        const{navbarHeight, strokeHeight} = this.props;
        return (
            <Fragment>
                <SectionTop height={40} noOverflow navbarHeight={navbarHeight} backgroundColor={backgroundColors.gradiant} strokeHeight={strokeHeight}>
                    <Container>
                    <Row>
                        <Col col sm='12'>
                            <Hello/>
                            <Flex>
                                <IntroBox/>
                                {visibleTown &&
                                    <TownTransparent/>
                                }
                            </Flex>
                        </Col>
                    </Row>
                </Container>
                </SectionTop>
                <Section height={60} strokeHeight={strokeHeight} navbarHeight={navbarHeight} title>
                    <Container>
                        <Row>
                            {/*_______________________*/}
                            <Col col sm='12' md='4'>
                                {!visibleTown &&
                                <Town/>
                                }
                                <LinkProject
                                    url={'/about'}
                                    name={'Primadonna'}
                                    image={Primadonna}
                                    background='linear-gradient(129deg,
                                    #FFC800 0%, #F76B1C 100%)'
                                    noRadiusTopRight
                                />
                                <Row>
                                    <Col col sm='5' md="6">
                                        <LinkClient
                                        url={'/about'}
                                        name={'3dSide'}
                                        image={sideLogo}
                                        background={backgroundColors.navbar}
                                        />
                                    </Col>
                                    <Col col sm='7' md="6">
                                        <LinkClient
                                        url={'/about'}
                                        name={'Elle'}
                                        image={elleLogo}
                                        background={backgroundColors.secondary}
                                        rectangle
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            {/*_______________________*/}

                            <Col col sm='12' md='4'>
                                <LinkProject
                                    url={'/about'}
                                    name={'MarieJo'}
                                    image={marieJo}
                                    background='linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)'
                                    portrait
                                    noRadiusBottomLeft
                                />
                            </Col>
                            {/*_______________________*/}
                            <Col col sm='12' md={3} >
                                                <LinkProject
                                                    url={'/about'}
                                                    name={'Primadonna'}
                                                    image={Primadonna}
                                                    background='linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)'
                                                    small
                                                    noRadiusTopLeft
                                                />
                                                <LinkProject
                                                    url={'/about'}
                                                    name={'Andres Sarda'}
                                                    image={andresSarda}
                                                    background='linear-gradient(-144deg, #64E4DE 0%, #248CBB 100%)'
                                                    small
                                                    noRadiusBottomLeft
                                                />
                            </Col>
                            {/*_______________________*/}
                                    <Col col sm='12' md={1}>
                                        <Row>
                                            <Col col sm='12' md={12}>
                                                <LinkClient
                                                    url={'/work'}
                                                    name={'All projects'}
                                                    image={all}
                                                    background={skillsColors.all}
                                                    main={window.innerWidth < 768}
                                                />
                                            </Col>
                                            <Col col sm='4' md={12}>
                                                <LinkClient
                                                    url={'/work/front-end'}
                                                    name={'front-end development'}
                                                    image={front}
                                                    background={skillsColors.front}
                                                />
                                            </Col>
                                            <Col col sm='4' md={12}>
                                                <LinkClient
                                                    url={'/work/web-design'}
                                                    name={'web design'}
                                                    image={web}
                                                    background={skillsColors.web}
                                                />
                                            </Col>
                                            <Col col sm='4' md={12}>
                                                <LinkClient
                                                    url={'/work/graphic-design'}
                                                    name={'graphic design'}
                                                    image={graphic}
                                                    background={skillsColors.graphic}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                            {/*_______________________*/}
                            </Row>
                    </Container>
                </Section>
            </Fragment>

        )
    }
}
