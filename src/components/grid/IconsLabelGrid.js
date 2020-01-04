import React from 'react';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {colors, textColors} from '../../styles/default/Colors';

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
    display: ${props => props.labelOnly ? 'block' : 'none'};    
    bottom: 10px;
    position: ${props => props.withColorBox ? 'absolute' : 'inherit'};
    cursor: default;
    font-weight: 600;
    ${fontSize(8.5)};
    left: ${props => props.withColorBox ? 50 : 0}%;
    transform: translateX(${props => props.withColorBox ? -50 : 0}%);
    ${props => props.withColorBox ? lineHeight(10) : lineHeight(12)};
  }
  ${media.md`
    border-radius: ${props => props.withLabel ? 10 : 28}px;
    min-width: ${props => props.withColorBox ? (props.withLabel ? 0 : 70) : 0}px;
    padding: ${props => props.withColorBox ? 'calc(100% - 6px) 0 0 0' : '0 5px' };
    text-align: center;
    align-items: center;
    position: relative;
      p{
         display: ${props => props.withLabel ? 'none' : 'block'};    
      }
      
    &:after, &:before{
      display: ${props => props.toolTip ? 'block' : 'none'}
      z-index: 3;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      opacity: 0;
      visibility: hidden;
      transition: .1s ease-in-out;
    }
    
    --noteBottomPosition: 51px;
    --noteTriangleSize: 8px;
    
    //ToolTip
    &:after{
      content: "${props => props.label}";
      bottom: var(--noteBottomPosition);
      display: block;
      background: ${colors.grey100};
      color: ${textColors.secondary};
      height: auto;
      padding: 8px;
      text-align: center;
      border-radius: 5px;
      ${fontSize(10)};
      ${lineHeight(12)};
      font-weight: 500;
    }
    
    &:before{
      content: "";
      width: 0;
      height: 0;
      bottom: 43px;
      border-style: solid;
      border-width: var(--noteTriangleSize) 7.5px 0 7.5px;
      border-color: ${colors.grey100} transparent transparent transparent;
    }
    
    &:hover{
    &:after, &:before{
    visibility: visible;
          opacity: .955;
          display: ${props => props.toolTip ? 'block' : 'none'}
    }
    }
  
  `}
`;

const ImageContainer = styled.div`
  --iconsHeight: 40px ;
  position: ${props => props.withColorBox ? 'absolute' : 'inherit'};
  height: var(--iconsHeight);
  display: ${props => props.withColorBox ? 'flex' : 'none'};
  top: ${props => props.withLabel ? '50%' : 0};
  transform: translateY(${props => props.withLabel ? '-50%' : 0});
  img{
    width: var(--iconsHeight);
  }
  ${media.md`
    margin-bottom: 4px;
  --iconsHeight: ${props => props.withLabel ? 47 : 50}px ;
  position: ${props => props.withColorBox ? 'absolute' : 'inherit'};
  height: var(--iconsHeight);
  display: flex;
  top: ${props => props.withLabel ? '50%' : '-4px'};
  transform: translateY(${props => props.withLabel ? '-50%' : 0});
  img{
    width: var(--iconsHeight);
  }
  
  `}
`;

export class IconsLabelGrid extends React.Component {
    render() {
        const {label,labelOnly, icon,toolTip,withLabel, withColorBox, backgroundColor, borderColor, textColor} = this.props;
        return (
            <IconBox
                labelOnly={labelOnly}
                withLabel={withLabel}
                withColorBox={withColorBox}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                textColor={textColor}
                label={label}
                toolTip={toolTip}
            >
                <ImageContainer withColorBox={withColorBox} label={label} withLabel={withLabel} >
                    <img src={icon} alt={label}/>
                </ImageContainer>
                <p>{label}</p>
            </IconBox>
        )
    }
}
