import {backgroundColors, softwareColors, textColors} from '../styles/default/Colors';
import brand from '../assets/icons/skills/lightbulb.svg'
import video from '../assets/icons/skills/play-button.svg'
import motion from '../assets/icons/skills/bounce.svg'
import paper from '../assets/icons/skills/flyer.svg'
import draw from '../assets/icons/skills/digital.svg'
import pack from '../assets/icons/skills/package.svg'
import ind from '../assets/icons/software/ind.svg'
import ae from '../assets/icons/software/ae.svg'
import ps from '../assets/icons/software/ps.svg'
import pr from '../assets/icons/software/pr.svg'
import ai from '../assets/icons/software/ai.svg'
import pencil from '../assets/icons/pencil.svg'

export const SkillGraphicDesigner = [
    {
        id: 0,
        label: 'Brand Identity',
        icon: brand
    },
    {
        id: 1,
        label: 'Stationery Design',
        icon: paper
    },
    {
        id: 2,
        label: 'Illustration',
        icon: draw
    },
    {
        id: 3,
        label: 'Packaging',
        icon: pack
    },
    {
        id: 4,
        label: 'Motion Graphic',
        icon: motion
    },
    {
        id: 5,
        label: 'Video Editing',
        icon: video
    },

];


export const SoftwareGraphicDesigner = [
    {
        id: 0,
        icon: ind,
        label: 'In Design',
        backgroundColor: backgroundColors.secondary,
        borderColor: softwareColors.ind,
        textColor: softwareColors.ind
    },
    {
        id: 1,
        icon: ps,
        label: 'Photoshop',
        backgroundColor: backgroundColors.secondary,
        borderColor: softwareColors.ps,
        textColor: softwareColors.ps,
    },
    {
        id: 2,
        icon: ai,
        label: 'Illustrator',
        backgroundColor: backgroundColors.secondary,
        borderColor: softwareColors.ai,
        textColor: softwareColors.ai,
    },
    {
        id: 3,
        icon: ae,
        label: 'After Effect',
        backgroundColor: backgroundColors.secondary,
        borderColor: softwareColors.ae,
        textColor: softwareColors.ae,
    },
    {
        id: 4,
        icon: pr,
        label: 'Premiere',
        backgroundColor: backgroundColors.secondary,
        borderColor: softwareColors.pr,
        textColor: softwareColors.pr,
    },
    {
        id: 5,
        label: 'My hands',
        icon: pencil,
        backgroundColor: 'transparent',
        borderColor: softwareColors.sass,
        textColor: textColors.primary
    }
]




