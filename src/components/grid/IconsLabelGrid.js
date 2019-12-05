import React from 'react';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {textColors} from '../../styles/default/Colors';

const IconBox = styled.div`
  background: ${props => props.withColorBox ? props.backgroundColor : 'transparent'};
  border-radius: 10px;
  padding: ${props => props.withColorBox ? 'calc(100% - 6px) 0 0 0' : 0 };
  display: flex;
  height: ${props => props.withColorBox ? 0 : 'auto' };
  flex-direction: column;
  justify-content: flex-start;
  border: ${props => props.withColorBox ? '3px solid ' + props.borderColor : 'none'};
  color: ${props => props.withColorBox ? props.textColor : textColors.primary};
  position: relative;
  
  p{
    display: ${props => props.withColorBox ? 'none' : 'block'};    
    bottom: 10px;
    position: ${props => props.withColorBox ? 'absolute' : 'inherit'};
    cursor: default;
    font-weight: 600;
    ${fontSize(10)};
    left: ${props => props.withColorBox ? 50 : 0}%;
    transform: translateX(${props => props.withColorBox ? -50 : 0}%);
    ${props => props.withColorBox ? lineHeight(10) : lineHeight(14)};
  }
  ${media.md`
    border-radius: ${props => props.label ? 28 : 10}px;
    min-width: ${props => props.withColorBox ? (props.label ? 80 : 0) : 0}px;
    padding: ${props => props.withColorBox ? 'calc(100% - 6px) 0 0 0' : '0 5px' };
    text-align: center;
    align-items: center;
      p{
        display: block;
      }
  
  `}
`;

const ImageContainer = styled.div`
  --iconsHeight: 40px ;
  position: ${props => props.withColorBox ? 'absolute' : 'inherit'};
  height: var(--iconsHeight);
  display: ${props => props.withColorBox ? 'flex' : 'none'};
  top: ${props => props.label ? 0 : '50%'};
  transform: translateY(${props => props.label ? 0 : '-50%'});
  img{
    width: var(--iconsHeight);
  }
  ${media.md`
    margin-bottom: 4px;
  --iconsHeight: ${props => props.label ? 60 : 47}px ;
  position: ${props => props.withColorBox ? 'absolute' : 'inherit'};
  height: var(--iconsHeight);
  display: flex;
  top: ${props => props.label ? '-4px' : '50%'};
  transform: translateY(${props => props.label ? 0 : '-50%'});
  img{
    width: var(--iconsHeight);
  }
  `}
`;

export class IconsLabelGrid extends React.Component {
    render() {
        const {label, icon, withColorBox, backgroundColor, borderColor, textColor} = this.props;
        return (
            <IconBox
                withColorBox={withColorBox}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                textColor={textColor}
                label={label}
            >
                <ImageContainer withColorBox={withColorBox} label={label} >
                    <img src={icon} alt={label}/>
                </ImageContainer>
                {label &&
                <p>{label}</p>
                }
            </IconBox>
        )
    }
}
