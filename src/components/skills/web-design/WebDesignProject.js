import React from 'react'
import {ProjectWebDesign} from '../../../constants/projects-web-design-mock';
import {SkillsScreen} from '../../../screens/SkillsScreen';
import {skillsColors} from '../../../styles/default/Colors';

export function WebDesignProject ({match}) {
    const topic = ProjectWebDesign.find(({ slug }) => slug === match.params.slug);
    return (
        <SkillsScreen
            webDesignProject

            logo={topic.logo}
            positionDate={topic.position.date}
            position={topic.position.name}
            MainCover={topic.desktop[0]}
            desktopScreens={topic.desktop}
            mobileScreens={topic.mobile}
            fontName={topic.styles.fontName}
            projectTitle={topic.name}
            description={topic.position.description}

            tasks={Object.values(topic.position.tasks)}
            skillLinks={Object.values(topic.position.skillLinks)}

            communication='Project Management'
            communicationSoftware={Object.values(topic.position.managment)}

            softwareUsed={Object.values(topic.position.softwares)}

            name={topic.name}

            gradiants={topic.styles.gradiants}
            colors={topic.styles.colors}
            circleColor={skillsColors.web}
            cta="Next Web Design Project"
            ctaTo={topic.nextSlug}

            backgroundColor={topic.background}
            marginTop={topic.marginTop}

            sixItems
        />

    )
}