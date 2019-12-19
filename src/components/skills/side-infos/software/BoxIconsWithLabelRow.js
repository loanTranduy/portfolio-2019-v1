import React from 'react';
import {SkillPropTypes} from '../../../../constants/front-end-skills-mock';
import {IconsLabelGrid} from '../../../grid/IconsLabelGrid';

export class BoxIconsWithLabelRow extends React.Component {
    static propTypes = {
        softwareFrontEnd: SkillPropTypes,
    };
    render() {
        const {softwareFrontEnd, toolTip} = this.props;
        return (
            <IconsLabelGrid
                icon={softwareFrontEnd.icon}
                label={softwareFrontEnd.label}
                backgroundColor={softwareFrontEnd.backgroundColor}
                borderColor={softwareFrontEnd.borderColor}
                textColor={softwareFrontEnd.textColor}
                withColorBox
                toolTip={toolTip}
                withLabel={toolTip}
            />
        )
    }
}
