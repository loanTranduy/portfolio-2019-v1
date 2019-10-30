import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {NavSidebarLinkPropTypes} from '../../constants/navLinksMock';

//Menu mobile
const Box = styled.li`
    ${media.md`
    margin-right: 56px;
    `}
`

const LinkWithIcon = styled(Link)`
    padding: 8px;
    display: flex;
    flex-direction: column;
`

export class NavSidebarLinkRow extends React.Component {
    static propTypes = {
        navSidebarLink: NavSidebarLinkPropTypes,
    };

    render() {
        return (
            <Box>
                <LinkWithIcon
                    to={this.props.navSidebarLink.breadCrumb}
                >
                    <img src={this.props.navSidebarLink.icon} alt={this.props.navSidebarLink.name}/>
                    {this.props.navSidebarLink.name}
                </LinkWithIcon>
            </Box>
        )
    }
}
