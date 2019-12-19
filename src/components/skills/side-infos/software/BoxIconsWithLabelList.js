import React from 'react'
import {BoxIconsWithLabelRow} from './BoxIconsWithLabelRow';
import {SkillsPropTypes} from '../../../../constants/front-end-skills-mock';
import PropTypes from 'prop-types'

export class BoxIconsWithLabelList extends React.Component {
    static propTypes = {
        softwaresFrontEnd: SkillsPropTypes,
        toolTip: PropTypes.bool
    };

    render() {
        return this.props.softwaresFrontEnd.map((softwareFrontEnd, id) => (
            <BoxIconsWithLabelRow key={id} softwareFrontEnd={softwareFrontEnd} toolTip={this.props.toolTip}/>
        ))
    }
}
