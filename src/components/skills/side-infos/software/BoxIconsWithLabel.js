import React from 'react';
import {BoxIconsWithLabelList} from './BoxIconsWithLabelList';
import {Grid} from '../skills/IconsWithLabel';
import {media} from '../../../../styles/default/Mediaqueries';
import styled from 'styled-components';


export const GridForBoxes = styled(Grid)`
  margin-left: 0;
  grid-template-columns: repeat(3, 45px);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
  margin-bottom: 24px;
  
  ${media.md`
    margin-left: 0;
    max-width: 200px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 22px;
    grid-row-gap: 24px;
    margin-bottom: 48px;
  `}
`;

export class BoxIconsWithLabel extends React.Component {

    render() {
        const {title, softwaresFrontEnd} = this.props;
        return (
            <>
                <h2>{title}</h2>
                <GridForBoxes>
                    <BoxIconsWithLabelList softwaresFrontEnd={softwaresFrontEnd}/>
                </GridForBoxes>
            </>
        )
    }
}
