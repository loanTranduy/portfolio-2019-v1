import React from 'react'
import {ProjectFrontEnd} from '../../../constants/projects-front-end-mock';
import {SkillFrontEnd, SoftwareDesignFrontEnd, SoftwareFrontEnd} from '../../../constants/front-end-skills-mock';
import {SkillsScreen} from '../../../screens/SkillsScreen';
import {skillsColors} from '../../../styles/default/Colors';

export function FrontEndProject ({match}) {
    const topic = ProjectFrontEnd.find(({ slug }) => slug === match.params.slug);
    console.log(topic);
    console.log(match)
    return (
        <div>
            <p>{topic.resources[0].name}</p>
            <p>{topic.name}</p>

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
            />
        </div>

    )
}
