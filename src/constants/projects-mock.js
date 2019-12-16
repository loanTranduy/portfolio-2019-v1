import PropTypes from 'prop-types'

import btsGraphicDesignCover from '../assets/images/project/hackages/mockups/bts-logo.png';
import hackagesGraphicDesignCover from '../assets/images/project/hackages/mockups/business-card-front-800.png';
import vergerBioGraphicDesignCover from '../assets/images/project/verger-bio/mockups/verger-bio-cover.png';
import btbdGraphicDesignCover from '../assets/images/project/brussel-food-truck-festival/mockups/stationary/pattern-cover.svg';
import dSideGraphicDesignCover from '../assets/images/project/3d-side/3dside-poster.svg';
import hugeiaTablier from '../assets/images/project/hugeia/mockups/tablier.png';
import bftfPoster from '../assets/images/project/brussel-food-truck-festival/mockups/only-poster.png';

import hackagesCoverFront from '../assets/images/project/hackages/hackages-cover.png';
import primadonnaCoverFront from '../assets/images/project/primadonna/primadonna-cover-web.png';
import marieJoCoverFront from '../assets/images/project/marie-jo/marie-jo-cover-web.png';
import vdabCoverFront from '../assets/images/project/vdab/VDAB_preview-900x627.jpg';
import edenredCoverFront from '../assets/images/project/edenred/edenred-cover-web.png';

import hackagesCoverWeb from '../assets/images/project/hackages/hackages-cover-web.png';
import vdabCoverWeb from '../assets/images/project/vdab/vdab-cover-teste.png';
import edenredCoverWeb from '../assets/images/project/edenred/edenred-cover-front.png';
import marieJoCoverWeb from '../assets/images/project/marie-jo/marie-jo-cover.jpg';
import primadonnaCoverWeb from '../assets/images/project/primadonna/primadonna-cover.jpg';
import {gradiantFront, gradiantGaph, gradiantWeb} from '../styles/default/Colors';

import web from './../assets/icons/layout.svg'
import front from './../assets/icons/front.svg'
import graph from './../assets/icons/pencil.svg'

export const ProjectPropTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.string,
    background: PropTypes.string,
    portrait: PropTypes.bool,
    noRadiusBottomLeft: PropTypes.bool,
    noRadiusTopRight: PropTypes.bool
}).isRequired;

export const ProjectsPropTypes = PropTypes.arrayOf(ProjectPropTypes).isRequired;

const landscape = '58%';
const portrait = '128%';
const square = '80%';

export const Project = [
    {
        id: 0,
        colxl: landscape,
        col: '60%',
        name: 'Hackages',
        slug: 'hackages',
        image: hackagesCoverFront,
        coverColor: gradiantFront,
        skill: 'front-end',
        skillIcon: front,
    },
    {
        id: 1,
        colxl: square,
        col: '130%',
        name: 'Verger Bio',
        slug: 'verger-bio',
        image: vergerBioGraphicDesignCover,
        coverColor: gradiantGaph,
        skill: 'graphic-design',
        portrait: true,
        portraitDesktop: true,
        skillIcon: graph,
    },
    {
        id: 2,
        colxl: portrait,
        col: square,
        name: '3D side',
        slug: '3d-side',
        image: dSideGraphicDesignCover,
        coverColor: gradiantGaph,
        skill: 'graphic-design',
        portraitDesktop: true,
        skillIcon: graph,
    },
    {
        id: 3,
        colxl: square,
        col: square,
        name: 'Brussels Food Truck Festival',
        slug: 'brussels-foodtruck-festival',
        image: bftfPoster,
        coverColor: gradiantGaph,
        skill: 'graphic-design',
        portrait: true,
        portraitDesktop: true,
        noRadiusBottomLeft: true,
        skillIcon: graph,
    },
    {
        id: 4,
        colxl: portrait,
        col: portrait,
        name: 'Bhack to School',
        slug: 'bhack-to-school',
        image: btsGraphicDesignCover,
        coverColor: gradiantGaph,
        skill: 'graphic-design',
        portrait: true,
        portraitDesktop: true,
        skillIcon: graph,

    },
    {
        id: 5,
        colxl: landscape,
        col: landscape,
        name: 'Marie Jo',
        slug: 'marie-jo',
        image: marieJoCoverFront,
        coverColor: gradiantFront,
        skill: 'front-end',
        skillIcon: front,
    },
    {
        id: 6,
        colxl: landscape,
        col: landscape,
        name: 'Hackages',
        slug: 'hackages',
        image: hackagesGraphicDesignCover,
        coverColor: gradiantGaph,
        skill: 'graphic-design',
        skillIcon: graph,
    },
    {
        id: 7,
        colxl: portrait,
        col: portrait,
        name: 'VDAB',
        slug: 'vdab',
        image: vdabCoverFront,
        coverColor: gradiantFront,
        skill: 'front-end',
        portrait: true,
        portraitDesktop: true,
        skillIcon: front,
    },
    {
        id: 8,
        colxl: portrait,
        col: portrait,
        name: 'Marie Jo',
        slug: 'marie-jo',
        image: marieJoCoverWeb,
        coverColor: gradiantWeb,
        skill: 'web-design',
        portrait: true,
        skillIcon: web,
    },
    {
        id: 9,
        colxl: landscape,
        col: landscape,
        name: 'Primadonna',
        slug: 'primadonna',
        image: primadonnaCoverFront,
        coverColor: gradiantWeb,
        skill: 'web-design',
        skillIcon: web,
    },
    {
        id: 10,
        colxl: portrait,
        col: portrait,
        name: 'Prima donna',
        slug: 'primadonna',
        image: primadonnaCoverWeb,
        coverColor: gradiantFront,
        skill: 'front-end',
        portrait: true,
        portraitDesktop: true,
        skillIcon: front,
    },
    {
        id: 11,
        colxl: landscape,
        col: landscape,
        name: 'Hackages',
        slug: 'hackages',
        image: hackagesCoverWeb,
        coverColor: gradiantWeb,
        skill: 'web-design',
        skillIcon: web,
    },
    {
        id: 12,
        colxl: portrait,
        col: portrait,
        name: 'Edenred',
        slug: 'edenred',
        image: edenredCoverWeb,
        coverColor: gradiantWeb,
        skill: 'web-design',
        portrait: true,
        portraitDesktop: true,
        skillIcon: web,
    },
    {
        id: 13,
        colxl: portrait,
        col: portrait,
        name: 'Edenred',
        slug: 'edenred',
        image: edenredCoverFront,
        coverColor: gradiantFront,
        skill: 'front-end',
        portrait: true,
        portraitDesktop: true,
        skillIcon: front,
    },
    {
        id: 14,
        colxl: portrait,
        col: portrait,
        name: 'Vdab',
        slug: 'vdab',
        image: vdabCoverWeb,
        coverColor: gradiantWeb,
        skill: 'web-design',
        portrait: true,
        portraitDesktop: true,
        skillIcon: web,
    },
    {
        id: 15,
        colxl: portrait,
        col: portrait,
        name: 'Beta Bondieu',
        slug: 'beta-bon-dieu',
        image: btbdGraphicDesignCover,
        coverColor: gradiantGaph,
        skill: 'graphic-design',
        portraitDesktop: true,
        skillIcon: graph,
    },
    {
        id: 16,
        colxl: landscape,
        col: landscape,
        name: 'Hugeia',
        slug: 'hugeia',
        image: hugeiaTablier,
        coverColor: gradiantGaph,
        skill: 'graphic-design',
        skillIcon: graph,
    },
];



