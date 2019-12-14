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
        exact: true
    },
    {
        id: 1,
        name: 'Work',
        breadCrumb: '/work/all',
        exact: false
    },
    {
        id: 2,
        name: 'About',
        breadCrumb: '/about',
        exact: false
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
        name: 'Discover all Projects',
        label: 'See All',
        breadCrumb: '/work/all',
        icon: work,
        filter: 'all'
    },
    {
        id: 1,
        name: 'Front-end Developer',
        label: 'Front',
        breadCrumb: '/work/front-end',
        icon: front,
        filter: 'front'
    },
    {
        id: 2,
        name: 'UX / UI Designer',
        label: 'ux/ui',
        breadCrumb: '/work/web-design',
        icon: ui,
        filter: 'web'
    },
    {
        id: 3,
        name: 'Graphic Designer',
        label: 'Graphic',
        breadCrumb: '/work/graphic-design',
        icon: design,
        filter: 'graphic'
    }

]
