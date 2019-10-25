import PropTypes from 'prop-types'

export const NavMainLinkPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    breadCrumb: PropTypes.string,
}).isRequired

export const NavMainLinksPropTypes = PropTypes.arrayOf(NavMainLinkPropTypes).isRequired

export const NavMainLink = [
    {
        id: 0,
        name: 'Home',
        breadCrumb: '/',
    },
    {
        id: 1,
        name: 'Work',
        breadCrumb: '/work',
    },
    {
        id: 2,
        name: 'About',
        breadCrumb: '/about',
    },
    {
        id: 3,
        name: 'Contact',
        breadCrumb: '/contact',
    }

]
