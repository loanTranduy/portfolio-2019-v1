import React from 'react'
import {NavSidebarLinkRow} from './NavSidebarLinkRow';
import {NavSidebarLinksPropTypes} from '../../constants/nav-links-mock';

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