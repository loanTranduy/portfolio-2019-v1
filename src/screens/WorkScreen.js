import React from 'react'
import styled from 'styled-components';
import {Project} from '../constants/projects-mock';
import {ProjectCoverList} from '../components/skills/projects-covers/ProjectCoverList';
import {ProjectContainer} from './SkillsScreen';
import {media} from '../styles/default/Mediaqueries';

const Content = styled(ProjectContainer)`
padding: 48px 32px;
${media.md`
  width: auto;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 0;
  
  a{margin-bottom: 32px}
  
  a:nth-child(1), a:nth-child(6), a:nth-child(7), a:nth-child(10), a:nth-child(12){
    grid-column: span 8;
  }
  a:nth-child(2), a:nth-child(5), a:nth-child(8), a:nth-child(9), a:nth-child(11){
    grid-column: span 4;
  }
    
  a:nth-child(3), a:nth-child(4), a:nth-child(13), a:nth-child(14), a:nth-child(15), a:nth-child(16), a:nth-child(17){
    grid-column: span 6; 
  }
`}

${media.xl`
  grid-column-gap: 32px;
  
  a:nth-child(1), a:nth-child(17), a:nth-child(6), a:nth-child(7), a:nth-child(10), a:nth-child(12){
    grid-column: span 4;
  }
  
  a:nth-child(2), a:nth-child(4), a:nth-child(13), a:nth-child(14), a:nth-child(15) , a:nth-child(16){
    grid-column: span 3; 
  }
  
  a:nth-child(3), a:nth-child(5), a:nth-child(8), a:nth-child(9), a:nth-child(11){
    grid-column: span 2; 
  }
`}
 
`

export class WorkScreen extends React.Component {
    render() {
        return (
                <Content>
                    <ProjectCoverList projects={Object.values(Project)}/>
                </Content>
        )
    }
}



