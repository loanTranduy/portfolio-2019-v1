import React from 'react'
import styled from 'styled-components';
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import codepen from '../../assets/icons/codepen.svg'
import {media} from '../../styles/default/Mediaqueries';
import {fontSize} from '../../styles/default/Mixins';
import mail from '../../assets/icons/at.svg'
import {backgroundColors} from '../../styles/default/Colors';

const Footer = styled.footer`
  background:${props => props.blackTop ? backgroundColors.secondary : 'transparent'};
  border-bottom-left-radius: ${props => props.blackTop ? 24 : 0}px;
  border-bottom-right-radius: ${props => props.blackTop ? 24 : 0}px;
  padding: ${props => props.blackTop ? '8px 64px' : 0};
  
  ul{
    bottom: 0;
    display: flex; 
    margin:${props => props.blackTop ? 0 : '0 auto 48px auto'};
    justify-content: space-between; 
    width: ${props => props.blackTop ? 'auto' : '200px'};
    flex-direction: row;
    a{
        padding: 16px;
        img{
          width: 20px;
        }
    }
    ${media.md`
    padding: 50px 16px 0 16px;
    width: auto;
    flex-direction: column;
    li{
        margin: 32px auto 0 auto;
        a{
        padding: 10px 4px;
        height: 24px;}
        }
        img{
        width: 24px;
        }
    `}
      ${media.lg`
      margin: 16px 20px;
          padding: 0;
          flex-direction: row;
          justify-content: flex-start;
          li{
            margin: 0 24px 0 0;
          }
      `}
  }
      p{
      ${fontSize(12)};
        margin: 0 0 32px 24px;
      }
`
export class SocialFooter extends React.Component {

    render() {
        const{blackTop} = this.props;
        return (
            <Footer blackTop={blackTop}>
                <ul>
                    <li><a href="mailto:tdl.tranduy@gmail.com" ><img src={mail} alt="mail"/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/loan-tran-duy-87690a111/"><img src={linkedin} alt="linkedin"/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/loanTranduy"><img src={github} alt="github"/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/tranduy"><img src={codepen} alt="codepen"/></a></li>
                </ul>
                {window.innerWidth > 991 &&
                    <p>TRAN DUY LOAN Sprl</p>
                }
            </Footer>
        )
    }
}


