import React from 'react'
import {LinkProject} from '../../button/LinkProject';

export class ProjectCoverRow extends React.Component {

    render() {
        const {project, url} = this.props;
        return (
            <LinkProject
                url={url}
                portraitDesktop={project.portraitDesktop}
                col={project.col}
                colxl={project.colxl}
                name={project.name}
                longtext={project.name.length > 10 ? true : false}
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


