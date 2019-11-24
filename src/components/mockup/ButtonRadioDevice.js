import React from 'react'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {RadioButton} from './RadioButton';

export const InputBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  label:first-of-type{
    width: 15px;
    height: 26px;
  }
  
  ${media.xl`
  `}
`;


export class ButtonRadioDevice extends React.Component {
    render() {
        const {currentValue, value, OnChangeDevice} = this.props;
        return (
            <InputBox value={value} currentValue={currentValue}>
                {this.props.items.map((device, id) =>
                    (<RadioButton
                            noLabel
                            key={id}
                            name="type"
                            value={device.value}
                            currentValue={value}
                            onChange={OnChangeDevice}
                    />
                ))}
            </InputBox>
        )
    }
}