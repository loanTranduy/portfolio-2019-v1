import React from 'react';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {fontSize, lineHeight} from '../../styles/default/Mixins';

export const Label = styled.label`
    background: ${props => props.noLabel ? 'rgba(255,255,255,0.47)' : 'none'};
    border: ${props => props.noLabel ? '2px solid #FFFFFF' : 'none'};
    width: ${props => props.noLabel ? '50px' : 'auto'};
    height: ${props => props.noLabel ? '35px' : 'auto'};
    display: block;
    cursor: pointer;
    margin: ${props => props.noLabel ? '0 8px 16px 8px' : '0 0 0 16px'};
    padding: 4px;
    border-radius: 4px;
    opacity: ${props => props.value === props.currentValue ? 1 : .4};
    transition: opacity .3s ease-in-out;
    ${fontSize(14)};
    ${lineHeight(22)};
  ${media.md`
    &:hover{
      opacity: 1;
    }
  `}
`;


export class RadioButton extends React.Component {
    render() {
        const { name, value, currentValue, onChange, noLabel} = this.props;
        return (
            <Label noLabel={noLabel} currentValue={currentValue} value={value}>
                <input
                    name='type'
                    value={value}
                    type="radio"
                    onChange={onChange}
                    hidden
                />
                {noLabel ? '': name}
            </Label>
        );
    }
}