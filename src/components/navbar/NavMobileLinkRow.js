import React from 'react'
import {Link} from 'react-router-dom'
import {NavMainLinkPropTypes} from '../../constants/navLinksMock';
import PropTypes from 'prop-types';


export class NavMobileLinkRow extends React.Component {

    static propTypes = {
        navMainLink: NavMainLinkPropTypes,
        closeSlideMenu: PropTypes.func,
    }

    render() {
        const{closeSlideMenu} = this.props;
        return (
            <li>
                <Link
                    onClick={closeSlideMenu}
                    to={this.props.navMainLink.breadCrumb}
                >
                    {this.props.navMainLink.name}
                    </Link>
            </li>
        )
    }
}
