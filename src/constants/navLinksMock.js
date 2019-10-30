import PropTypes from 'prop-types'
import work from '../assets/icons/eye.svg'
import ui from '../assets/icons/layout.svg'
import front from '../assets/icons/front.svg'
import design from '../assets/icons/pencil.svg'


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


export const NavSidebarLinkPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    breadCrumb: PropTypes.string,
    icon: PropTypes.string,
}).isRequired

export const NavSidebarLinksPropTypes = PropTypes.arrayOf(NavSidebarLinkPropTypes).isRequired


export const NavSidebarLink = [
    {
        id: 0,
        name: 'See All',
        breadCrumb: '/work',
        icon: work,
        filter: 'all'
    },
    {
        id: 1,
        name: 'ux/ui',
        breadCrumb: '/work/web-design',
        icon: ui,
        filter: 'web'
    },
    {
        id: 2,
        name: 'Front-end',
        breadCrumb: '/work/front-end',
        icon: front,
        filter: 'front'
    },
    {
        id: 3,
        name: 'Graphic',
        breadCrumb: '/work/graphic-design',
        icon: design,
        filter: 'graphic'
    }

]
