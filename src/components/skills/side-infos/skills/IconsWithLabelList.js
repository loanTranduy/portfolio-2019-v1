import React from 'react'
import {IconsWithLabelRow} from './IconsWithLabelRow';
import PropTypes from 'prop-types';

export class IconsWithLabelList extends React.Component {
    static propTypes = {
        id: PropTypes.number,
    }

    render() {
        return this.props.skillsFrontEnd.map(skillFrontEnd => (
            <IconsWithLabelRow key={skillFrontEnd.id} skillFrontEnd={skillFrontEnd} labelOnly={this.props.labelOnly}/>
        ))
    }
}


