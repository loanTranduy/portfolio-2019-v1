import React from 'react'
import {IconsWithLabelRow} from './IconsWithLabelRow';
import {SkillsPropTypes} from '../../../../constants/front-end-skills-mock';

export class IconsWithLabelList extends React.Component {
    static propTypes = {
        skillsFrontEnd: SkillsPropTypes,
    }

    render() {
        return this.props.skillsFrontEnd.map(skillFrontEnd => (
            <IconsWithLabelRow key={skillFrontEnd.id} skillFrontEnd={skillFrontEnd}/>
        ))
    }
}


