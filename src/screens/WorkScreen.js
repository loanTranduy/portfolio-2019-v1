import React from 'react'
import styled from 'styled-components';
import {Project} from '../constants/projects-mock';
import {ProjectCoverList} from '../components/skills/projects/ProjectCoverList';
import {ProjectContainer} from './SkillsScreen';
import {media} from '../styles/default/Mediaqueries';

const Content = styled(ProjectContainer)`
padding: 48px 32px;
${media.md`
  max-width: 3000px;
  width: auto;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  
  a:nth-child(1){
    grid-column: span 2;
    grid-row: span 3; 
  }
    a:nth-child(2){
    grid-column: span 1; 
    grid-row: span 2; 
  }
    a:nth-child(3){
    grid-column: span 1; 
    grid-row: span 2; 
  }
    a:nth-child(4){
    grid-column: span 2; 
    grid-row: span 3; 
  }
    a:nth-child(5){
    grid-column: span 1;
    grid-row: span 3;  
  }
  a:nth-child(6){
    grid-column: span 1;
    grid-row: span 3; 
  }
    a:nth-child(7){
    grid-column: span 2; 
    grid-row: span 3; 
  }
    a:nth-child(8){
    grid-column: span 2; 
    grid-row: span 3; 
  }
    a:nth-child(9){
    grid-column: span 1; 
    grid-row: span 1; 
  }
    a:nth-child(10){
    grid-column: span 1;
    grid-row: span 1;  
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



