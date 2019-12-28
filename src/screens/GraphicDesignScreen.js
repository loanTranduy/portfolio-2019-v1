import React from 'react'
import {SkillGraphicDesigner, SoftwareGraphicDesigner} from '../constants/graphic-design-skills-mock';
import {skillsColors} from '../styles/default/Colors';
import {ProjectGraphicDesign} from '../constants/projects-graphic-design-mock';
import {SkillsScreen} from './SkillsScreen';


export class GraphicDesignScreen extends React.Component {
    render() {
        return (
            <SkillsScreen
                circleColor={skillsColors.front}
                title="Graphic Designer"
                skills={Object.values(SkillGraphicDesigner)}
                softwareTitle='Favorite Workflow'
                software={Object.values(SoftwareGraphicDesigner)}
                cta="Discover my developer skills"
                ctaTo="/work/front-end"
                projects={Object.values(ProjectGraphicDesign)}
                navbarHeight={this.props.navbarHeight}
            />
        )
    }
}
