import React, {Fragment} from 'react'
import {Flex, Section} from '../components/SharedStyle';
import {IntroBox} from '../components/landing/IntroBox';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {Hello} from '../components/landing/hello/Hello';
import {TownTransparent} from '../components/landing/TownTransparent';
import {LinkProject} from '../components/button/LinkProject';
import Primadonna from '../assets/images/project/primadonna/primadonna-cover.jpg'
import {
    backgroundColors, gradiantBlue,
    gradiantFront, gradiantGaph,
    gradiantWeb,
    skillsColors
} from '../styles/default/Colors';
import {LinkClient} from '../components/button/LinkClient';
import sideLogo from '../assets/images/project/3d-side/3d-side-logo-cube.svg'
import hackagesCubeLogo from '../assets/images/project/hackages/hackages-logo-cube.svg'
import marieJo from '../assets/images/project/marie-jo/marie-jo-cover.jpg'
import front from '../assets/icons/front.svg'
import web from '../assets/icons/layout.svg'
import graphic from '../assets/icons/pencil.svg'
import all from '../assets/icons/eye.svg'
import {Town} from '../components/landing/Town';
import hackagesCoverFront from '../assets/images/project/hackages/hackages-cover.jpg';
import vergerBioGraphicDesignCover from '../assets/images/project/verger-bio/mockups/verger-bio-cover.jpg';
import {media} from '../styles/default/Mediaqueries';

import
    throttle from 'lodash.throttle';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SectionTop = styled(Section)`
  ${Container}{
    max-width: 1000px;
  }
`
export const SectionLanding = styled(Section)`
  div > div > div:last-of-type > div >div:last-of-type{
    a{
      margin-bottom: 200px;
    }
  }
  
  ${media.md`
     div > div > div {
       max-height: 360px;
     }
     
     ${Container}{
     max-width: 1000px;
     }
  `}
`

export class LandingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleTown: false,
        };
        this.updateDimensions = throttle(this.updateDimensions, 500).bind(this);
    };

    static propTypes = {
        navbarHeight: PropTypes.number,
        strokeHeight: PropTypes.number,
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

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    };

    render() {
        const {visibleTown} = this.state;
        const{navbarHeight, strokeHeight} = this.props;
        return (
            <Fragment>
                <SectionTop  noOverflow navbarHeight={navbarHeight} backgroundColor={backgroundColors.gradiant} strokeHeight={strokeHeight}>
                    <Container>
                    <Row>
                        <Col col sm='12'>
                            <Hello/>
                            <Flex>
                                <IntroBox/>
                                {/*{visibleTown &&*/}
                                {/*    <TownTransparent/>*/}
                                {/*}*/}
                            </Flex>
                        </Col>
                    </Row>
                </Container>
                </SectionTop>
                <SectionLanding strokeHeight={strokeHeight} navbarHeight={navbarHeight} title="true">
                    <Container>
                        <Row>
                            {/*_______________________*/}
                            <Col col sm='12' md='4'>
                                {/*{!visibleTown &&*/}
                                {/*<Town/>*/}
                                {/*}*/}
                                <LinkProject
                                    url='/work/front-end/hackages'
                                    name='Hackages'
                                    image={hackagesCoverFront}
                                    background={gradiantWeb}
                                    noRadiusTopRight
                                    portraitDesktop
                                    col='78%'
                                />
                                <Row>
                                    <Col col sm='6' md="6">
                                        <LinkClient
                                        url='/work/graphic-design/3d-side'
                                        name='3dSide'
                                        image={sideLogo}
                                        background={backgroundColors.navbar}
                                        />
                                    </Col>
                                    <Col col sm='6' md="6">
                                        <LinkClient
                                        url='/work/graphic-design/hackages'
                                        name='Hackages'
                                        image={hackagesCubeLogo}
                                        background={'linear-gradient(50deg, #188DF2 0%, #00CCBE 100%)'}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            {/*_______________________*/}

                            <Col col sm='12' md='4'>
                                <LinkProject
                                    url='/work/front-end/marie-jo'
                                    name='MarieJo'
                                    image={marieJo}
                                    background={gradiantFront}
                                    portrait
                                    portraitDesktop
                                    noRadiusBottomLeft
                                    col='134%'
                                />
                            </Col>
                            {/*_______________________*/}
                            <Col col sm='12' md={3} >
                                                <LinkProject
                                                    url='/work/front-end/primadonna'
                                                    name='Prima donna'
                                                    image={Primadonna}
                                                    background={gradiantBlue}
                                                    small
                                                    noRadiusTopLeft
                                                    col='85.5%'
                                                />
                                                <LinkProject
                                                    url='/work/graphic-design/verger-bio'
                                                    name='Verger Bio'
                                                    image={vergerBioGraphicDesignCover}
                                                    background={gradiantGaph}
                                                    small
                                                    noRadiusBottomLeft
                                                    col='85.5%'
                                                    portraitDesktop
                                                />
                            </Col>
                            {/*_______________________*/}
                                    <Col col sm='12' md={1}>
                                        <Row>
                                            <Col col sm='12' md={12}>
                                                <LinkClient
                                                    url={'/work/all'}
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
                </SectionLanding>
            </Fragment>

        )
    }
}
