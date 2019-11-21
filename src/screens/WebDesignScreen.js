import React from 'react'
import {SkillWebDesigner, SoftwareWebDesigner, SoftwareWebDesignFrontEnd} from '../constants/web-design-skills-mock';
import {skillsColors} from '../styles/default/Colors';
import {ProjectWebDesign} from '../constants/projects-web-design-mock';
import {SkillsScreen} from './SkillsScreen';

export class WebDesignScreen extends React.Component {
    render() {
        return (
            <SkillsScreen
                circleColor={skillsColors.graphic}
                title="Web Designer"
                skills={Object.values(SkillWebDesigner)}
                softwareTitle='Favorite Workflow'
                software={Object.values(SoftwareWebDesigner)}
                cta="Discover my graphic design skills"
                ctaTo="/work/graphic-design"
                communication="Team tools"
                communicationSoftware={Object.values(SoftwareWebDesignFrontEnd)}
                projects={Object.values(ProjectWebDesign)}
                navbarHeight={this.props.navbarHeight}
            />
        )
    }
}
