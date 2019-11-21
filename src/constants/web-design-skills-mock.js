import space from '../assets/icons/skills/space.svg'
import svg from '../assets/icons/skills/svg.svg'
import proto from '../assets/icons/skills/settings-2.svg'
import ux from '../assets/icons/skills/team.svg'
import ui from '../assets/icons/layout.svg'
import pixel from '../assets/icons/skills/layout-1.svg'
import zeplin from '../assets/icons/software/zeplin.svg'
import sketch from '../assets/icons/software/sketchh.svg'
import sitemap from '../assets/icons/software/sitemap.svg'
import principle from '../assets/icons/software/principle-app.svg'
import figma from '../assets/icons/software/figma.svg'



import React from 'react';
import {softwareColors, textColors} from '../styles/default/Colors';


const openingText = (
    <>
        8pt system
        <br />
        n/12 column
    </>
);

export const SkillWebDesigner = [
    {
        id: 0,
        label: 'User Experience',
        icon: ux
    },
    {
        id: 1,
        label: 'User Interface',
        icon: ui
    },
    {
        id: 2,
        label: 'Pixel Perfect',
        icon: pixel
    },
    {
        id: 3,
        label: 'Icon Illustration',
        icon: svg
    },
    {
        id: 4,
        label: openingText,
        icon: space
    },
    {
        id: 5,
        label: 'Advanced Prototyping',
        icon: proto
    },

];


export const SoftwareWebDesigner = [
    {
        id: 0,
        label: 'GlooMaps',
        icon: sitemap,
        backgroundColor: softwareColors.glooMaps,
        borderColor: softwareColors.glooMaps,
        textColor: textColors.secondary
    },
    {
        id: 1,
        label: 'Sketch',
        icon: sketch,
        backgroundColor: 'transparent',
        borderColor: softwareColors.sketch,
        textColor: textColors.primary

    },
    {
        id: 2,
        label: 'Principle',
        icon: principle,
        backgroundColor: 'transparent',
        borderColor: softwareColors.principle,
        textColor: textColors.primary

    }
]

export const SoftwareWebDesignFrontEnd = [
    {
        id: 0,
        label: 'Zeplin',
        icon: zeplin,
        backgroundColor: 'transparent',
        borderColor: softwareColors.zeplin,
        textColor: textColors.primary

    },
    {
        id: 1,
        label: 'Figma',
        icon: figma,
        backgroundColor: 'transparent',
        borderColor: softwareColors.figma,
        textColor: textColors.primary

    },
]




