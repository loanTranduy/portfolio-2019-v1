import PropTypes from 'prop-types'
import react from '../assets/icons/software/react.svg'
import lightbulb from '../assets/icons/skills/lightbulb.svg'
import phone from '../assets/icons/skills/phone.svg'
import heart from '../assets/icons/skills/heart.svg'
import space from '../assets/icons/skills/space.svg'
import svg from '../assets/icons/skills/svg.svg'
import styled from '../assets/icons/software/styled-component.png'
import sass from '../assets/icons/software/sass.svg'
import load from '../assets/icons/skills/refresh.svg'
import sketch from '../assets/icons/software/sketchh.svg'
import zeplin from '../assets/icons/software/zeplin.svg'
import {softwareColors, textColors} from '../styles/default/Colors';

export const SkillPropTypes = PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    icon: PropTypes.string,
}).isRequired;

export const SkillsPropTypes = PropTypes.arrayOf(SkillPropTypes).isRequired;

export const SkillFrontEnd = [
    {
        id: 0,
        label: 'SEO',
        icon: lightbulb
    },
    {
        id: 1,
        label: 'Accessibility',
        icon: heart
    },
    {
        id: 2,
        label: 'Mobile First',
        icon: phone
    },
    {
        id: 3,
        label: 'Responsive Design',
        icon: space
    },
    {
        id: 4,
        label: 'Css Animation',
        icon: load
    },
    {
        id: 5,
        label: 'Svg Icon',
        icon: svg
    },

];


export const SoftwareFrontEnd = [
    {
        id: 0,
        label: 'React',
        icon: react,
        backgroundColor: softwareColors.react,
        borderColor: softwareColors.react,
        textColor: textColors.secondary
    },
    {
        id: 1,
        label: 'Styled component',
        icon: styled,
        backgroundColor: softwareColors.styledComponent,
        borderColor: softwareColors.styledComponent,
        textColor: textColors.primary

    },
    {
        id: 2,
        label: 'Sass',
        icon: sass,
        backgroundColor: softwareColors.sass,
        borderColor: softwareColors.sass,
        textColor: textColors.secondary

    }
]

export const SoftwareDesignFrontEnd = [
    {
        id: 0,
        label: 'Sketch',
        icon: sketch,
        backgroundColor: 'transparent',
        borderColor: softwareColors.sketch,
        textColor: textColors.primary
    },
    {
        id: 1,
        label: 'Zeplin',
        icon: zeplin,
        backgroundColor: 'transparent',
        borderColor: softwareColors.zeplin,
        textColor: textColors.primary

    },
]



