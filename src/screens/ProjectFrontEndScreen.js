import React from 'react'
import {SkillFrontEnd, SoftwareDesignFrontEnd, SoftwareFrontEnd} from '../constants/front-end-skills-mock';
import {SkillsScreen} from './SkillsScreen';
import {skillsColors} from '../styles/default/Colors';


export class ProjectFrontEndScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideInfosOpen: false,
        };
    }

    render() {
        return (
            <SkillsScreen
                circleColor={skillsColors.web}
                title="Front-end Developer"
                skills={Object.values(SkillFrontEnd)}
                softwareTitle='Favorite Workflow'
                software={Object.values(SoftwareFrontEnd)}
                communication='Communication with designers'
                communicationSoftware={Object.values(SoftwareDesignFrontEnd)}
                cta="Discover my web design skills"
                ctaTo="/work/web-design"
                navbarHeight={this.props.navbarHeight}
                clientFrontEnd
            />
        )
    }
}
