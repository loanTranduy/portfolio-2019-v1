import React from 'react';
import {BoxIconsWithLabelList} from './BoxIconsWithLabelList';
import {Grid} from '../skills/IconsWithLabel';
import {media} from '../../../../styles/default/Mediaqueries';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {fontSize, lineHeight} from '../../../../styles/default/Mixins';
import {textColors} from '../../../../styles/default/Colors';

export const GridForBoxes = styled(Grid)`
  margin-left: 0;
  margin-bottom: 24px;
  grid-template-columns: repeat(3, 45px);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
  position: relative;
  margin-top: 16px;
  
  ${media.md`
    margin-top: 24px;
    margin-left: 0;
    margin-bottom: 24px;
    max-width: 200px;
    grid-template-columns: ${props => props.sixItems ? 'repeat(5, 45px)' : '1fr 1fr 1fr'};
    grid-column-gap: ${props => props.sixItems ? 16 : 22}px;
    grid-row-gap: 24px;
  `}
`;

export const Label = styled.p`
  ${lineHeight(13)};
  ${fontSize(10)};
  font-weight: 700;
  color: ${textColors.tertiary};
  
  ${media.md`
    ${fontSize(12)};
  `}
`;

export class BoxIconsWithLabel extends React.Component {
    static propTypes = {
        sixItems: PropTypes.bool,
    };

    render() {
        const {title, softwaresFrontEnd, sixItems, toolTip, softwaresFrontEndV2} = this.props;
        return (
            <>
                <h2>{title}</h2>
                {softwaresFrontEndV2 && softwaresFrontEndV2.length > 0 &&
                    <Label>V1.0</Label>
                }
                <GridForBoxes sixItems={sixItems}>
                    <BoxIconsWithLabelList softwaresFrontEnd={softwaresFrontEnd} toolTip={toolTip}/>
                </GridForBoxes>

                {softwaresFrontEndV2 && softwaresFrontEndV2.length > 0 &&
                    <>
                    <Label>V2.0</Label>
                    <GridForBoxes sixItems={sixItems}>
                        <BoxIconsWithLabelList softwaresFrontEnd={softwaresFrontEndV2} toolTip={toolTip}/>
                    </GridForBoxes>
                    </>
                }
            </>
        )
    }
}
