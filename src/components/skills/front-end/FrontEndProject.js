import React, {useState} from 'react'
import {ProjectFrontEnd} from '../../../constants/projects-front-end-mock';
import {SkillFrontEnd, SoftwareDesignFrontEnd, SoftwareFrontEnd} from '../../../constants/front-end-skills-mock';
import {SkillsScreen} from '../../../screens/SkillsScreen';
import {skillsColors} from '../../../styles/default/Colors';



export function FrontEndProject ({match}) {
    const topic = ProjectFrontEnd.find(({ slug }) => slug === match.params.slug);

    const [screenId, setScreenId] = useState(0);

    let callbackScreenId = (childData) => {
        setScreenId(childData)
    };

    const handleScreenChange = (e) => {
        setScreenId(e.target.value)
    };

    return (
            <SkillsScreen
                circleColor={skillsColors.web}
                title={topic.name}
                skills={Object.values(SkillFrontEnd)}
                softwareTitle='Favorite Workflow'
                software={Object.values(SoftwareFrontEnd)}
                communication='Communication with designers'
                communicationSoftware={Object.values(SoftwareDesignFrontEnd)}
                cta="Discover my web design skills"
                ctaTo="/work/web-design"

                name={topic.name}
                cover={topic.desktop[screenId]}
                coverMobile={topic.mobile[screenId]}
                screens={topic.links}
                parentScreenId={callbackScreenId}
                handleScreen={handleScreenChange}
                value={Number(screenId)}
            />
    )

}
