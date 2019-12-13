import React from 'react'
import styled from 'styled-components';
import {Mockup} from '../../mockup/Mockup';
import {media} from '../../../styles/default/Mediaqueries';
import {ButtonRadioDevice} from '../../mockup/ButtonRadioDevice';
import {ButtonRadioScreenDesktop} from '../../mockup/ButtonRadioScreenDesktop';
import throttle from 'lodash.throttle';

export const ContentInside = styled.section`
  padding: ${props => props.marginTop ? '80px 72px 32px 24px' : '24px 72px 32px 24px'};
  position: relative;
  
  &:before{
    content:'';
    position: ${props => props.absolute ? 'absolute' : 'fixed'};
    z-index: -1;
    top: ${props => props.absolute ? -200 : -160}px;
    left: -100px;
    right: -10px;
    background:${props => props.backgroundColor};
    height: ${props => props.absolute ? 415 : 400}px;
    transform: rotate(-16deg);
  }
  ${media.md`
  &:before{
    top: ${props => props.absolute ? -160 : -80}px;
    }
  `}
  
  ${media.xl`
  &:before{
    top: ${props => props.absolute ? -104 : -55}px;
    }
    padding: ${props => props.marginTop ? '100px 48px 48px 48px' : '48px'};
    width: calc(100% - ${props => props.sideInfoWidth}px);
  `}
`;

export const Logo = styled.img`

  
  ${media.md`
    width: 123px;
    margin: 8px auto 44px auto;
    display: block;
  `}
  
  ${media.xl`

  `}
`;

let devices = [
    { value: "mobile"},
    { value: "desktop"},
];

export class FrontEndProjectMockup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 'desktop',
            desktop: false,
        };
    this.updateDimensions = throttle(this.updateDimensions, 500).bind(this);
    }
    updateDimensions() {
        if (window.innerWidth < 768) {
            this.setState({desktop: false});
        } else {
            this.setState({desktop: true});
        }
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        const{cover,handleScreen,value, sideInfoWidth, coverMobile, screens,logo, coverLow, backgroundColor, marginTop} = this.props;
        return (
            <ContentInside sideInfoWidth={sideInfoWidth} backgroundColor={backgroundColor} marginTop={marginTop}>
                <Logo src={logo} alt=""/>
                {coverMobile && !!coverMobile.length &&
                    <ButtonRadioDevice
                        items={devices}
                        value={this.state.value}
                        OnChangeDevice={this.handleChange}
                    />
                }
                <Mockup
                    cover={this.state.value === 'mobile' ? coverMobile : (this.state.desktop ? cover : coverLow)}
                    device={this.state.value}
                />
                <ButtonRadioScreenDesktop
                    items={screens}
                    value={value}
                    OnChangeScreen={handleScreen}
                />
            </ContentInside>
        )
    }
}
