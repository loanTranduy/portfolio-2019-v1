import React, {useState} from 'react'
import {ProjectFrontEnd} from '../../../constants/projects-front-end-mock';
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
                logo={topic.logo}
                positionDate={topic.position.date}
                position={topic.position.name}

                projectTitle={topic.name}
                description={topic.position.description}

                tasks={Object.values(topic.position.tasks)}
                skillLinks={Object.values(topic.position.skillLinks)}

                communication='Project Management'
                communicationSoftware={Object.values(topic.position.managment)}

                softwareUsed={Object.values(topic.position.softwares)}

                name={topic.name}
                cover={topic.desktop[screenId]}
                coverMobile={topic.mobile[screenId]}
                coverLow={topic.desktopLowQuality[screenId]}
                screens={topic.links}
                parentScreenId={callbackScreenId}
                handleScreen={handleScreenChange}
                value={Number(screenId)}

                circleColor={skillsColors.front}
                cta="Next Front-end Project"
                ctaTo={topic.nextSlug}

                backgroundColor={topic.background}
                marginTop={topic.marginTop}

                sixItems
            />
    )

}
