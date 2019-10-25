import React from 'react'
import {NavMainLinksPropTypes} from '../../constants/navLinksMock';
import {NavMobileLinkRow} from './NavMobileLinkRow';

export class NavMobileLinkList extends React.Component {
    static propTypes = {
        navMainLinks: NavMainLinksPropTypes,
    }

    render() {
        return this.props.navMainLinks.map(navMainLink => (
            <NavMobileLinkRow key={navMainLink.id} navMainLink={navMainLink}/>
        ))
    }
}
