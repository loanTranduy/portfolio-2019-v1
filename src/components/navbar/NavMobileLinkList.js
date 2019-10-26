import React from 'react'
import {NavMainLinksPropTypes} from '../../constants/navLinksMock';
import {NavMobileLinkRow} from './NavMobileLinkRow';
import PropTypes from 'prop-types';

export class NavMobileLinkList extends React.Component {
    static propTypes = {
        navMainLinks: NavMainLinksPropTypes,
        closeSlideMenu: PropTypes.func,
    }

    render() {
        return this.props.navMainLinks.map(navMainLink => (
            <NavMobileLinkRow key={navMainLink.id} navMainLink={navMainLink} closeSlideMenu={this.props.closeSlideMenu}/>
        ))
    }
}
