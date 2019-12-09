import React from 'react'
import styled from 'styled-components';
import {backgroundColors} from '../../styles/default/Colors';
import {NavSidebar} from './NavSidebar';
import throttle from 'lodash.throttle';
import {media} from '../../styles/default/Mediaqueries';
import corner from '../../assets/images/corner.svg';
import {SocialFooter} from '../navbar/SocialFooter';


export const Content = styled.nav`
  border-top-left-radius: 20px;
  background: ${backgroundColors.navbar};
  position: fixed;
  bottom: ${props => (props.position)}px;
  right: ${props => (props.position)}px;
  left: ${props => (props.position)}px;
  z-index: 4;
  transition: all 0.29s ease;
  ${media.md`
  display: flex;
  box-shadow: none;
  flex-direction: column;
  justify-content: space-between;
      border-radius: 0;
      left: ${props => (props.position)}px;
      right: auto;
      top: 60px;
      &:after{
          content:url(${corner});
          position: absolute;
          right: -39px;
          top: 10px;
          width: 40px;
      }
  `}
`


export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.navbar = React.createRef();
        this.updateDimensions = throttle(this.updateDimensions, 500).bind(this);
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    updateDimensions() {
        this.props.parentCallback(
            this.navbar.current.clientHeight
        );
        this.props.parentCallbackWidth(
            this.navbar.current.clientWidth
        );
    };

    render() {
        const {position} = this.props;
        return (
            <Content ref={this.navbar} position={position}>
                <NavSidebar/>
                {window.innerWidth > 767 &&
                <SocialFooter/>
                }
            </Content>
        )
    }
}


