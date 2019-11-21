import React from 'react'
import {LinkProject} from '../../button/LinkProject';
import {ProjectsPropTypes} from '../../../constants/projects-mock';

export class ProjectCoverRow extends React.Component {
    static propTypes = {
        project: ProjectsPropTypes,
    };

    render() {
        const {project, url} = this.props;
        return (
            <LinkProject
                url={url}
                name={project.name}
                image={project.image}
                background={project.background}
                portrait={project.portrait}
                noRadiusBottomLeft={project.noRadiusBottomLeft}
                noRadiusTopRight={project.noRadiusTopRight}
            />
        )
    }
}


