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
        
        svg path{
        fill: ${props => props.blackTop ? 'white' : 'black'}
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
        img, svg{
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
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/loan-tran-duy-87690a111/">
                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.61 13.733H.768V4.682H3.61v9.051zM2.19 3.446h-.02C1.218 3.446.6 2.75.6 1.882.6.994 1.237.318 2.209.318c.972 0 1.57.676 1.589 1.564 0 .869-.617 1.564-1.608 1.564zm11.665 10.287h-2.84V8.891c0-1.217-.412-2.047-1.44-2.047-.785 0-1.253.56-1.458 1.1-.075.194-.094.464-.094.734v5.055h-2.84s.036-8.202 0-9.051h2.84v1.281c.378-.616 1.054-1.494 2.561-1.494 1.87 0 3.271 1.294 3.271 4.074v5.19z" fill="#000" fill-rule="nonzero"/>
                        </svg>
                    </a></li>
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


