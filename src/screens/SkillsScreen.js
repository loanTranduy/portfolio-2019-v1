import React from 'react'
import {SideInfos} from '../components/skills/side-infos/SideInfos';
import {ProjectCoverList} from '../components/skills/projects-covers/ProjectCoverList';
import styled from 'styled-components';
import {media} from '../styles/default/Mediaqueries';
import {FrontEndProjectMockup} from '../components/skills/front-end/FrontEndProjectMockup';
import {GraphicDesignProjectMockup} from '../components/skills/graphic-design/GraphicDesignProjectMockup';

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 48px 72px 48px 32px;
  margin-bottom: 100px;
  
  ${media.md`
    grid-template-columns: repeat(12, 1fr);
    padding: 48px;
    margin-bottom: 0;
    
    a{
        background-size: auto 100%;
        margin: 0;
    }
    
    a:nth-child(1){
      background-size: auto 100%;
      grid-column: span 4;
      border-top-left-radius: 0px;
    }
      a:nth-child(2){
      background-size: 100% auto;
      grid-column: span 8;
      border-bottom-left-radius: 0px;
    }
    
    a:nth-child(3){
      grid-column: span 4; 
      border-bottom-right-radius: 0px;
    }
      a:nth-child(4){
      grid-column: span 4; 
      border-top-left-radius: 0px;
    }
      a:nth-child(5){
      grid-column: span 4; 
    }
      a:nth-child(6){
      grid-column: span 6;
      border-top-left-radius: 0px;
    }
      a:nth-child(7){
      grid-column: span 6;
      border-bottom-left-radius: 0px;
      background-size: auto 100%;
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
            theposition: window.pageYOffset
        };
    }

    callbackFunctionSkills = (childData) => {
        this.setState({
            sideInfoWidth: childData})
    };

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    render() {
        const {
            circleColor,
            backgroundColor,
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
            mockups,
            position,
            positionDate,
            description,
            tasks,
            softwareUsed,
            skillLinks,
            projectTitle,
            graphicProject,
            coverLow,
            handleScreen,
            screens,
            sixItems,
            value,
            coverVideo,
            coverVideoAlt,
            baseline,
            logo,
            baselineColor,
            backgroundImage,
            marginTop
        }= this.props;
        console.log(this.state.theposition)
        return (
            <>
                <SideInfos
                    skillLinks={skillLinks}
                    position={position}
                    positionDate={positionDate}
                    description={description}
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
                    tasks={tasks}
                    softwareUsed={softwareUsed}
                    projectTitle={projectTitle}
                    sixItems={sixItems}
                    nosixItems={false}
                />
                {projects &&
                    <ProjectContainer sideInfoWidth={this.state.sideInfoWidth} navbarHeight={navbarHeight}>
                        <ProjectCoverList projects={projects}/>
                    </ProjectContainer>
                }
                {cover &&
                <FrontEndProjectMockup
                    coverLow={coverLow}
                    coverMobile={coverMobile}
                    sideInfoWidth={this.state.sideInfoWidth}
                    navbarHeight={navbarHeight}
                    name={name}
                    cover={cover}
                    screens={screens}
                    handleScreen={handleScreen}
                    value={value}
                    backgroundColor={backgroundColor}
                    marginTop={marginTop}
                />
                }

                {graphicProject &&
                    <GraphicDesignProjectMockup
                        backgroundImage={backgroundImage}
                        baselineColor={baselineColor}
                        coverVideo={coverVideo}
                        coverVideoAlt={coverVideoAlt}
                        sideInfoWidth={this.state.sideInfoWidth}
                        mockups={mockups}
                        backgroundColor={backgroundColor}
                        baseline={baseline}
                        logo={logo}
                    />
                }

            </>
        )
    }
}
