import React from 'react';
import {BoxIconsWithLabelList} from './BoxIconsWithLabelList';
import {Grid} from '../skills/IconsWithLabel';
import {media} from '../../../../styles/default/Mediaqueries';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export const GridForBoxes = styled(Grid)`
  margin-left: 0;
  margin-bottom: 24px;
  grid-template-columns: repeat(3, 45px);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
  
  ${media.md`
    margin-top: 24px;
    margin-left: 0;
    margin-bottom: 0;
    max-width: 200px;
    grid-template-columns: ${props => props.sixItems ? 'repeat(5, 45px)' : '1fr 1fr 1fr'};
    grid-column-gap: ${props => props.sixItems ? 16 : 22}px;
    grid-row-gap: 24px;
  `}
`;

export class BoxIconsWithLabel extends React.Component {
    static propTypes = {
        sixItems: PropTypes.bool,
    };

    render() {
        const {title, softwaresFrontEnd, sixItems} = this.props;
        return (
            <>
                <h2>{title}</h2>
                <GridForBoxes sixItems={sixItems}>
                    <BoxIconsWithLabelList softwaresFrontEnd={softwaresFrontEnd} />
                </GridForBoxes>
            </>
        )
    }
}
