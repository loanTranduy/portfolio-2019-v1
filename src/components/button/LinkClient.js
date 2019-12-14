import React from 'react'
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {textColors} from '../../styles/default/Colors';


const LinkContainer = styled(Link)`
  overflow: hidden;
  border-radius: 40px;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${props => props.rectangle ? 70 :(props.main ?  30 : 100)}%;
  background: ${props => props.background};
  display: block;
  box-shadow: -13px 45px 40px 0 rgba(0,2,117,0.16);
  margin-bottom: 32px;
  img, p{
    padding: 16px;
    position: absolute;
    top: 50%;
    transform: translate(${props => props.main ? 0 : '-50%'}, -50%);
  }
    
    img{
      left:${props => props.main ? 'auto' : '50%'};
      right:${props => props.main ? '16px' : 'auto'};
      transform: translate(${props => props.main ? 0 : '-50%'}, -50%);
      width: ${props => props.main ? 'auto' : '80%'};
      height: ${props => props.main ? '60%' : 'auto'};
    }
    
    p{
      ${fontSize(18)};
      ${lineHeight(32)};
      color: ${textColors.secondary};
      font-weight: 700;
      letter-spacing: 4.28px;
      text-transform: uppercase;
      left: 16px
    }
    
  ${media.md`
    padding: ${props => props.main ? '24px' : '100% 0 0 0'};
    height: ${props => props.main ? 100 : 0}%;
    margin: ${props => props.main ? 0 : '0 0 32px 0'};
    
    display: flex;
    flex-direction column;
    justify-content: space-between;
    border-radius: 30px;
    
    height: ${props => props.main ? '323px' : 'auto'};
    transition: .3s ease-in-out;
    
    img, p{
        position: ${props => props.main ? 'inherit' : 'absolute'};
        padding:${props => props.main ? 0 : 4}px;
        transform: translate(${props => props.main ? '0, 0' : '-50%, -50%'});
        left:${props => props.main ? 'auto' : '50%'};
        right:${props => props.main ? 'auto' : 'auto'};
    }
    p{
        transform: rotate(${props => props.main ? -90 : 0}deg);
        ${fontSize(14)};
        ${lineHeight(26)};
        top: auto;
    }
    img{
        width: ${props => props.main ? '80%' : '90%'};
        height: ${props => props.main ? 'auto' : 'auto'};
        top: ${props => props.main ? '0' : '50%'};
        margin: 0 auto;
    }
    
    &:hover{
        transform: scale(0.98);
        box-shadow: -8px 19px 18px 0 rgba(0,2,117,0.16);
    }
  `}
  
  ${media.lg`
   margin: ${props => props.main ? 0 : '0 0 42px 0'};
  `}
`


export class LinkClient extends React.Component {

    render() {
        const {name, image, background, url, rectangle, main} = this.props;
        return (
            <LinkContainer rectangle={rectangle} background={background} main={main} to={url}>
                <img src={image} alt={name}/>
                {main &&
                    <p>All <br/>projects</p>
                }
             </LinkContainer>
        )
    }
}
