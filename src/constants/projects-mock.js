import PropTypes from 'prop-types'
import marieJo from '../assets/images/project/primadonna/primadonna-cover.jpg';

export const ProjectPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    background: PropTypes.string,
    portrait: PropTypes.bool,
    noRadiusBottomLeft: PropTypes.bool,
    noRadiusTopRight: PropTypes.bool

}).isRequired;

export const ProjectsPropTypes = PropTypes.arrayOf(ProjectPropTypes).isRequired;

export const Project = [
    {
        id: 0,
        name: 'Marie Jo',
        url: '/work/hackages',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
        portrait: true
    },
    {
        id: 1,
        name: 'Primadonna',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
        portrait: true
    },
    {
        id: 2,
        name: 'Hackages',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
        portrait: true,
        noRadiusBottomLeft: true
    },
    {
        id: 3,
        name: 'Edenred',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
        portrait: true
    },
    {
        id: 4,
        name: 'Vdab',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',

    },
    {
        id: 5,
        name: 'Marie Jo',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
    },
    {
        id: 6,
        name: 'Primadonna',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
    },
    {
        id: 7,
        name: 'Hackages',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
    },
    {
        id: 8,
        name: 'Edenred',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
    },
    {
        id: 9,
        name: 'Vdab',
        url: '/work/front-end/marie-jo',
        image: marieJo,
        background:'linear-gradient(-135deg, #C869FF 0%, #5424BB 100%)',
    },

];



