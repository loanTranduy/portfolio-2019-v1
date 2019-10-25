import React from 'react'
import {Link} from 'react-router-dom'
import {NavMainLinkPropTypes} from '../../constants/navLinksMock';


export class NavMobileLinkRow extends React.Component {

    static propTypes = {
        navMainLink: NavMainLinkPropTypes
    }

    render() {
        return (
            <li>
                <Link to={this.props.navMainLink.breadCrumb}>{this.props.navMainLink.name}</Link>
            </li>
        )
    }
}
