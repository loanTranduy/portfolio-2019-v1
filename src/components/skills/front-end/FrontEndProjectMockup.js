import React from 'react'
import styled from 'styled-components';
import {hackagesColors} from '../../../styles/default/Colors';
import {Mockup} from '../../mockup/Mockup';
import {media} from '../../../styles/default/Mediaqueries';
import {ButtonRadioDevice} from '../../mockup/ButtonRadioDevice';
import {ButtonRadioScreenDesktop} from '../../mockup/ButtonRadioScreenDesktop';

export const ContentInside = styled.section`
  padding: 24px 72px 32px 24px;
  
  &:before{
    content:'';
    position: fixed;
    z-index: -1;
    top: -80px;
    left: -100px;
    right: 0;
    background:${hackagesColors.background};
    height: 400px;
    transform: rotate(-16deg);
  }
  
  ${media.xl`
    top: -40px;
    padding: 48px;
    width: calc(100% - ${props => props.sideInfoWidth}px);
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
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };


    render() {
        const{cover,handleScreen,value, sideInfoWidth, coverMobile, screens} = this.props;
        return (
            <ContentInside sideInfoWidth={sideInfoWidth}>
                <ButtonRadioDevice
                    items={devices}
                    value={this.state.value}
                    OnChangeDevice={this.handleChange}
                />
                <Mockup
                    cover={
                        this.state.value === 'mobile' ?
                        coverMobile
                        : cover
                    }
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
