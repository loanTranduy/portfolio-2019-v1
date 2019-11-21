import React from 'react'
import {SkillFrontEnd, SoftwareDesignFrontEnd, SoftwareFrontEnd} from '../constants/front-end-skills-mock';
import {skillsColors} from '../styles/default/Colors';
import {ProjectFrontEnd} from '../constants/projects-front-end-mock';
import {SkillsScreen} from './SkillsScreen';
import {Route, Switch} from 'react-router-dom';

export class FrontEndScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideInfosOpen: false,
        };
    }

    render() {
        return (
            <>
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
                projects={Object.values(ProjectFrontEnd)}
                navbarHeight={this.props.navbarHeight}
            />
        </>
    )
    }
}


