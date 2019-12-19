import React from 'react'
import {ProjectGraphicDesign} from '../../../constants/projects-graphic-design-mock';
import {SkillsScreen} from '../../../screens/SkillsScreen';
import {skillsColors} from '../../../styles/default/Colors';

export function GraphicDesignProject ({match}) {
    const topic = ProjectGraphicDesign.find(({ slug }) => slug === match.params.slug);
    return (
        <SkillsScreen
            graphicProject

            positionDate={topic.position.date}
            position={topic.position.name}
            projectTitle={topic.name}
            logo={topic.logo}
            baseline={topic.baseline.text}
            baselineColor={topic.baseline.color}
            description={topic.position.description}

            tasks={Object.values(topic.position.tasks)}
            skillLinks={topic.position.skillLinks.length > 0 ? Object.values(topic.position.skillLinks) : null}
            skillLinkColorSecond={topic.position.skillLinks.length > 0 ? topic.position.skillLinks[1].color : null}
            skillLinkColor={topic.position.skillLinks.length > 0 ? topic.position.skillLinks[0].color : null}

            communication='Project Management'
            communicationSoftware={Object.values(topic.position.managment)}

            softwareUsed={Object.values(topic.position.softwares)}

            backgroundColor={topic.background}
            backgroundImage={topic.backgroundImage}
            name={topic.name}

            mockups={topic.desktop}

            circleColor={skillsColors.graphic}
            cta="Next Graphic Design Project"
            ctaTo={topic.nextSlug}
            toolTipforCommunication
            toolTipForTools
            toolTipForSoftware
            sixItems
        />
    )
}
