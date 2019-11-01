import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavMainLinkPropTypes} from '../../constants/navLinksMock';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {fontFamilies as FontFamilies} from '../../styles/default/Font';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {colors} from '../../styles/default/Colors';

//Menu mobile
const Box = styled.li`
    ${lineHeight(64)};
    a{
      //font-family: ${FontFamilies.mtSemiBold};
      font-weight: 600;
      padding: 16px;
      ${fontSize(20)};
      position: relative;
      &:after{
      content:"";
      display: block;
      position: absolute;
      bottom: 4px;
      left: 16px;
      width: 0;
      height: 3px;
      background: ${colors.teal};
      transition: .3s ease-in-out;
      }
      
      &:active, &:focus{
      //underline
      &:after{
      width: 24px;

      }
    }
    }
    ${media.md`
    ${lineHeight(39)};
        a{
        ${fontSize(12)};
          &:hover{
      &:after{
      width: 24px;
      }
    }
        }
    `}
    ${media.xl`
        margin-right: 56px;
    `}
`

export class NavMobileLinkRow extends React.Component {
    static propTypes = {
        navMainLink: NavMainLinkPropTypes,
        closeSlideMenu: PropTypes.func,
        isCurrentPage: PropTypes.bool,
    };

    render() {

        const{closeSlideMenu, isCurrentPage} = this.props;
        return (
            <Box isCurrentPage={isCurrentPage} >
                <NavLink
                    onClick={closeSlideMenu}
                    to={this.props.navMainLink.breadCrumb}
                >
                    {this.props.navMainLink.name}
                    </NavLink>
            </Box>
        )
    }
}
