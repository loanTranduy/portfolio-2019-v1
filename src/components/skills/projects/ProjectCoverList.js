import React from 'react'
import {ProjectCoverRow} from './ProjectCoverRow';
import {ProjectsPropTypes} from '../../../constants/projects-mock';
import {Route} from 'react-router-dom';
import {ProjectFrontEnd} from '../../../constants/projects-front-end-mock';
import {ProjectWebDesign} from '../../../constants/projects-web-design-mock';


export function Child ({match}) {
    const topic = ProjectWebDesign.find(({ slug }) => slug === match.params.slug);
    console.log(topic);
    console.log(match)
    return (
        <div>
            {/*<p>{topic.resources[0].name}</p>*/}
            <p>{topic.name}</p>
        </div>

    )
}


export class ProjectCoverList extends React.Component {
    static propTypes = {
        projects: ProjectsPropTypes,
    };

    render() {
        return (
            <>
                {this.props.projects.map( project  => (
                    <ProjectCoverRow key={project.id} project={project} url={`/work/${project.skill}/${project.slug}`}/>

                ))}
                <Route path={`/work/:skill/:slug`} component={Child} />
            </>
        )
    }
}
