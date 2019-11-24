import React from 'react'
import {SideInfos} from '../components/skills/side-infos/SideInfos';
import {ProjectCoverList} from '../components/skills/projects-covers/ProjectCoverList';
import styled from 'styled-components';
import {media} from '../styles/default/Mediaqueries';
import {FrontEndProjectMockup} from '../components/skills/front-end/FrontEndProjectMockup';

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 48px 72px 48px 32px;
  margin-bottom: 88px;
  overflow: hidden;
  
  a{
    grid-column: span 3;
    grid-row: span 4; 
  }
  
  ${media.md`
    padding: 48px;
    
    a:nth-child(1){
      grid-column: span 1;
      grid-row: span 2; 
    }
      a:nth-child(2){
      grid-column: span 2; 
      grid-row: span 2; 
    }
      a:nth-child(3){
      grid-column: span 2; 
      grid-row: span 2; 
    }
      a:nth-child(4){
      grid-column: span 1; 
      grid-row: span 1; 
    }
      a:nth-child(5){
      grid-column: span 1;
      grid-row: span 1;  
    }
  `}
  
${media.xl`
  width: calc(100% - ${state => state.sideInfoWidth}px);
 
`}
`;

export class SkillsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideInfoWidth: 0,
        };
    }

    callbackFunctionSkills = (childData) => {
        this.setState({
            sideInfoWidth: childData})
    };

    render() {
        const {circleColor,
            coverMobile,
            cover,
            name,
            projects,
            title,
            skills,
            softwareTitle,
            software,
            cta,
            ctaTo,
            communication,
            communicationSoftware,
            navbarHeight,
            screens,
            handleScreen,
            value
        }= this.props;
        return (
            <>
                <SideInfos
                    circleColor={circleColor}
                    title={title}
                    skills={skills}
                    softwareTitle={softwareTitle}
                    software={software}
                    cta={cta}
                    ctaTo={ctaTo}
                    communication={communication}
                    communicationSoftware={communicationSoftware}
                    parentCallback={this.callbackFunctionSkills}
                />
                {projects &&
                    <ProjectContainer sideInfoWidth={this.state.sideInfoWidth} navbarHeight={navbarHeight}>
                        <ProjectCoverList projects={projects}/>
                    </ProjectContainer>
                }
                {cover &&
                <FrontEndProjectMockup
                    coverMobile={coverMobile}
                    sideInfoWidth={this.state.sideInfoWidth}
                    navbarHeight={navbarHeight}
                    name={name}
                    cover={cover}
                    screens={screens}
                    handleScreen={handleScreen}
                    value={value}
                />
                }
            </>
        )
    }
}
