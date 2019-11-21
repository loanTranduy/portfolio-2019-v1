import React from 'react';
import {SkillPropTypes} from '../../../../constants/front-end-skills-mock';
import {IconsLabelGrid} from '../../../grid/IconsLabelGrid';



export class IconsWithLabelRow extends React.Component {
    static propTypes = {
        skillFrontEnd: SkillPropTypes,
    };
    render() {
        const {skillFrontEnd} = this.props;
        return (
            <IconsLabelGrid icon={skillFrontEnd.icon} label={skillFrontEnd.label}/>
        )
    }
}
