import React from 'react'
import {ProjectFrontEnd} from '../../constants/projects-front-end-mock';

const FrontEndProject = ({ match }) => {
    const topic = ProjectFrontEnd.find(({ id }) => id === match.params.topicId);

    return (
        <section>
            <h2>hello</h2>
            <p>{topic.name}</p>
        </section>
    )
}
