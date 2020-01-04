import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavMainLinkPropTypes} from '../../constants/nav-links-mock';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {colors} from '../../styles/default/Colors';

//Menu mobile
const Box = styled.li`
    ${lineHeight(64)};
    a{
      font-weight: 600;
      padding: 16px;
      ${fontSize(18)};
      position: relative;
      display: initial;
      &:after{
      content:"";
      display: block;
      position: absolute;
      bottom: 0;
      left: 16px;
      width: 0;
      height: 4px;
      background: ${colors.teal};
      transition: .3s ease-in-out;
    }
      
      &.active, &:focus{
      //underline
      &:after{
        width: 24px;
      }
    }
    }
    ${media.md`
    ${lineHeight(22)};
        a{
        display: block;
        ${fontSize(10.5)};
           &:hover, &.active{
             &:after{
               width: 24px;
             }
           }
        }
    `}
    ${media.lg`
        margin-right: 56px;
    `}
`

export class NavMobileLinkRow extends React.Component {
    static propTypes = {
        navMainLink: NavMainLinkPropTypes,
        closeSlideMenu: PropTypes.func,
    };

    render() {

        const{closeSlideMenu} = this.props;
        return (
            <Box>
                <NavLink
                    exact={this.props.navMainLink.exact}
                    onClick={closeSlideMenu}
                    to={this.props.navMainLink.breadCrumb}
                >
                    {this.props.navMainLink.name}
                    </NavLink>
            </Box>
        )
    }
}
