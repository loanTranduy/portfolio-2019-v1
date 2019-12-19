import React from 'react';
import {IconsLabelGrid} from '../../../grid/IconsLabelGrid';
import PropTypes from 'prop-types';



export class IconsWithLabelRow extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        labelOnly: PropTypes.bool,
    };
    render() {
        const {skillFrontEnd, labelOnly} = this.props;
        return (
            <IconsLabelGrid icon={skillFrontEnd.icon} label={skillFrontEnd.label} labelOnly={labelOnly}/>
        )
    }
}
