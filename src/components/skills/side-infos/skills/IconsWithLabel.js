import styled from 'styled-components';
import {media} from '../../../../styles/default/Mediaqueries';
import React from 'react';
import {IconsWithLabelList} from './IconsWithLabelList';

export const Grid = styled.div`  
  display: grid;
  grid-template-columns: 1fr ;
  grid-column-gap: 16px;
  grid-row-gap: 4px;
  margin-bottom: 8px;
 
  ${media.md`
    margin-left: 8px;
    max-width: 350px;
    grid-template-columns: 60px 75px 75px;
    grid-column-gap: 34px;
    grid-row-gap: 16px;
    margin-bottom: 40px;
  `}
`;


export class IconsWithLabel extends React.Component {

    render() {
        const {sixItems, skillsFrontEnd} = this.props;

        return (
            <Grid sixItems={sixItems}>
                <IconsWithLabelList skillsFrontEnd={skillsFrontEnd}/>
            </Grid>
        )
    }
}
