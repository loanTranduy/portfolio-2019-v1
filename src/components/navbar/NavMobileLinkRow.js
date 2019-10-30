import React from 'react'
import {Link} from 'react-router-dom'
import {NavMainLinkPropTypes} from '../../constants/navLinksMock';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {fontFamilies as FontFamilies} from '../../styles/default/Font';

//Menu mobile
const Box = styled.li`

a{
  font-family: ${FontFamilies.mtSemiBold};
}
    ${media.md`
    margin-right: 56px;
    `}
`

export class NavMobileLinkRow extends React.Component {

    static propTypes = {
        navMainLink: NavMainLinkPropTypes,
        closeSlideMenu: PropTypes.func,
    }

    render() {
        const{closeSlideMenu} = this.props;
        return (
            <Box>
                <Link
                    onClick={closeSlideMenu}
                    to={this.props.navMainLink.breadCrumb}
                >
                    {this.props.navMainLink.name}
                    </Link>
            </Box>
        )
    }
}
