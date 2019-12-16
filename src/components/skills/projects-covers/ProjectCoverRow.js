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
                portraitDesktop={project.portraitDesktop}
                col={project.col}
                colxl={project.colxl}
                name={project.name}
                longText={project.name.length > 10 ? true : false}
                image={project.image}
                background={project.coverColor}
                portrait={project.portrait}
                noRadiusBottomLeft={project.noRadiusBottomLeft}
                noRadiusTopRight={project.noRadiusTopRight}
                skillIcon={project.skillIcon}
            />

        )
    }
}


