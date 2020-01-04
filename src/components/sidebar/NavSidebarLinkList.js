import React from 'react'
import {NavSidebarLinkRow} from './NavSidebarLinkRow';
import PropTypes from 'prop-types';

export class NavSidebarLinkList extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        breadCrumb: PropTypes.string,
        icon: PropTypes.string,
    };

    render() {
        return this.props.navSidebarLinks.map(navSidebarLink => (
            <NavSidebarLinkRow key={navSidebarLink.id} navSidebarLink={navSidebarLink} />
        ))
    }
}