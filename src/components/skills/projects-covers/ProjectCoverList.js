import React from 'react'
import {ProjectCoverRow} from './ProjectCoverRow';
import {ProjectsPropTypes} from '../../../constants/projects-mock';

export class ProjectCoverList extends React.Component {
    static propTypes = {
        projects: ProjectsPropTypes,
    };

    render() {
        return (
            <>
                {this.props.projects.map( project  => (
                    <ProjectCoverRow
                        key={project.id}
                        project={project}
                        url={`/work/${project.skill}/${project.slug}`}
                    />

                ))}
            </>
        )
    }
}
