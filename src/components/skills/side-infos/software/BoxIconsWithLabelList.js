import React from 'react'
import {BoxIconsWithLabelRow} from './BoxIconsWithLabelRow';
import {SkillsPropTypes} from '../../../../constants/front-end-skills-mock';

export class BoxIconsWithLabelList extends React.Component {
    static propTypes = {
        softwaresFrontEnd: SkillsPropTypes,
    };

    render() {
        return this.props.softwaresFrontEnd.map(softwareFrontEnd => (
            <BoxIconsWithLabelRow key={softwareFrontEnd.id} softwareFrontEnd={softwareFrontEnd}/>
        ))
    }
}
