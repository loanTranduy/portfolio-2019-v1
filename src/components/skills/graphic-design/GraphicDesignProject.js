import React from 'react'
import {ProjectGraphicDesign} from '../../../constants/projects-graphic-design-mock';

export function GraphicDesignProject ({match}) {
    const topic = ProjectGraphicDesign.find(({ slug }) => slug === match.params.slug);
    console.log(topic);
    console.log(match)
    return (
        <div>
            {/*<p>{topic.resources[0].name}</p>*/}
            <p>{topic.name}</p>
        </div>

    )
}
