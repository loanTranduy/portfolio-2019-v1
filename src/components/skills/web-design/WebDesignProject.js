import React from 'react'
import {ProjectWebDesign} from '../../../constants/projects-web-design-mock';

export function WebDesignProject ({match}) {
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
