import React from 'react'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {fontSize} from '../../styles/default/Mixins';
import {backgroundColors} from '../../styles/default/Colors';

const Footer = styled.footer`
  background:${props => props.blackTop ? backgroundColors.secondary : 'transparent'};
  border-bottom-left-radius: ${props => props.blackTop ? 24 : 0}px;
  border-bottom-right-radius: ${props => props.blackTop ? 24 : 0}px;
  padding: ${props => props.blackTop ? '8px 64px' : 0};
  
  position: ${props => props.blackTop ? 'fixed' : 'ineherite'};
    left: ${props => props.blackTop ? 0 : 'auto'};
    right: ${props => props.blackTop ? 0 : 'auto'};
    z-index: ${props => props.blackTop ? 1 : 0};
  
  ul{
    bottom: 0;
    display: flex; 
    margin:${props => props.blackTop ? 0 : '0 auto 48px auto'};
    justify-content: space-between; 
    width: ${props => props.blackTop ? 'auto' : '200px'};
    flex-direction: row;
    a{
        padding: 16px;
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

export const BoxSvg = styled.div`
   svg{
      width:20px;
      path{
       fill: ${props => props.blackTop ? 'white' : 'black'}
      }
   }
   
   ${media.md`
   svg{
      width:16px;
      }
   `}
   ${media.xl`
   svg{
      width:20px;
      }
   `}
`
export class SocialFooter extends React.Component {

    render() {
        const{blackTop} = this.props;
        return (
            <Footer blackTop={blackTop}>
                <ul>
                    <li><a href="mailto:tdl.tranduy@gmail.com" >
                        <BoxSvg blackTop={blackTop}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.2 490.2"><path d="M420.95 61.8C376.25 20.6 320.65 0 254.25 0c-69.8 0-129.3 23.4-178.4 70.3s-73.7 105.2-73.7 175c0 66.9 23.4 124.4 70.1 172.6 46.9 48.2 109.9 72.3 189.2 72.3 47.8 0 94.7-9.8 140.7-29.5 15-6.4 22.3-23.6 16.2-38.7-6.3-15.6-24.1-22.8-39.6-16.2-40 17.2-79.2 25.8-117.4 25.8-60.8 0-107.9-18.5-141.3-55.6-33.3-37-50-80.5-50-130.4 0-54.2 17.9-99.4 53.6-135.7 35.6-36.2 79.5-54.4 131.5-54.4 47.9 0 88.4 14.9 121.4 44.7s49.5 67.3 49.5 112.5c0 30.9-7.6 56.7-22.7 77.2-15.1 20.6-30.8 30.8-47.1 30.8-8.8 0-13.2-4.7-13.2-14.2 0-7.7.6-16.7 1.7-27.1l18.6-152.1h-64l-4.1 14.9c-16.3-13.3-34.2-20-53.6-20-30.8 0-57.2 12.3-79.1 36.8-22 24.5-32.9 56.1-32.9 94.7 0 37.7 9.7 68.2 29.2 91.3 19.5 23.2 42.9 34.7 70.3 34.7 24.5 0 45.4-10.3 62.8-30.8 13.1 19.7 32.4 29.5 57.9 29.5 37.5 0 69.9-16.3 97.2-49 27.3-32.6 41-72 41-118.1 0-58.4-22.3-108.3-67.1-149.5zm-147.4 230.1c-11.3 15.2-24.8 22.9-40.5 22.9-10.7 0-19.3-5.6-25.8-16.8-6.6-11.2-9.9-25.1-9.9-41.8 0-20.6 4.6-37.2 13.8-49.8s20.6-19 34.2-19c11.8 0 22.3 4.7 31.5 14.2s13.8 22.1 13.8 37.9c-.1 19.7-5.8 37.1-17.1 52.4z"/></svg>                        </BoxSvg>
                    </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/loan-tran-duy-87690a111/">
                        <BoxSvg blackTop={blackTop}>
                            <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M3.61 13.733H.768V4.682H3.61v9.051zM2.19 3.446h-.02C1.218 3.446.6 2.75.6 1.882.6.994 1.237.318 2.209.318s1.57.676 1.589 1.564c0 .869-.617 1.564-1.608 1.564zm11.665 10.287h-2.84V8.891c0-1.217-.412-2.047-1.44-2.047-.785 0-1.253.56-1.458 1.1-.075.194-.094.464-.094.734v5.055h-2.84s.036-8.202 0-9.051h2.84v1.281c.378-.616 1.054-1.494 2.561-1.494 1.87 0 3.271 1.294 3.271 4.074v5.19z"/></svg>
                        </BoxSvg>
                    </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/loanTranduy">
                        <BoxSvg blackTop={blackTop}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#000000" d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"/>
                            </svg>
                        </BoxSvg>
                    </a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/tranduy">
                        <BoxSvg blackTop={blackTop}>
                            <svg id="Bold"  viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"/></svg>
                        </BoxSvg>
                    </a></li>
                </ul>
                {window.innerWidth > 991 &&
                    <p>TRAN DUY LOAN Sprl</p>
                }
            </Footer>
        )
    }
}


