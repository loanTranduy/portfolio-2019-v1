import React from 'react'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {RadioButton} from './RadioButton';
import PropTypes from 'prop-types'


export const InputBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;

  label:first-of-type{
    width: ${props => props.noLabel ? '15px' : 'auto'};
    height: ${props => props.noLabel ? '26px' : 'auto'};
  }
  
  ${media.xl`
  `}
`;


export class ButtonRadioScreenDesktop extends React.Component {
    static propTypes = {
        value: PropTypes.number,
        currentValue: PropTypes.number,
    };

    render() {
        const {currentValue, value, OnChangeScreen} = this.props;
        return (
            <InputBox value={value} currentValue={currentValue}>
                {this.props.items.map((item) =>
                    (<RadioButton
                            key={item.id}
                            name={item.name}
                            value={item.id}
                            currentValue={value}
                            onChange={OnChangeScreen}
                        />
                    ))}
            </InputBox>
        )
    }
}