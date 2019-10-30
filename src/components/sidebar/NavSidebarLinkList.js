import React from 'react'
import {NavSidebarLinkRow} from './NavSidebarLinkRow';
import {NavSidebarLinksPropTypes} from '../../constants/navLinksMock';

export class NavSidebarLinkList extends React.Component {
    static propTypes = {
        navSidebarLinks: NavSidebarLinksPropTypes,
    };

    render() {
        return this.props.navSidebarLinks.map(navSidebarLink => (
            <NavSidebarLinkRow key={navSidebarLink.id} navSidebarLink={navSidebarLink} />
        ))
    }
}