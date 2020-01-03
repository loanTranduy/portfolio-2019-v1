import React from 'react'
import styled from 'styled-components';
import {SocialFooter} from '../components/navbar/SocialFooter';
import {Hello} from '../components/landing/hello/Hello';
import {fontSize, lineHeight} from '../styles/default/Mixins';
import {media} from '../styles/default/Mediaqueries';
import {backgroundColors} from '../styles/default/Colors';
import throttle from 'lodash.throttle';
import cv from '../assets/pdf/tran-duy-loan-cv-2019.pdf';

export const Content = styled.div`
  padding: 55px 36px 150px 36px;
  position: relative;
`;

export const ContentText = styled.div`
  ${media.md`
    margin-left: 170px;   
  `}
`;

export const SideName = styled.div`
  padding: 24px;
  background:${backgroundColors.secondary};
  border-top-right-radius: 38px;
  position: absolute;
    top: 0;
    left: 0px;
    bottom: 0;
    min-height: 100vh;
  a{
  color: white;
  ${fontSize(13)};
    ${lineHeight(24)};
    letter-spacing: .8px;
    text-align: right;
    transition: .3s ease-in-out;
    &:hover{
      opacity: .5;
    }
  }
  
  h2{
    margin-top: 122px;
    color: white;
    ${fontSize(15)};
    ${lineHeight(26)};
    font-weight: 700;
    text-align: right;
    margin-bottom: 51px;
  }
`;

export const Text = styled.p`
   ${fontSize(18)};
    ${lineHeight(30)};
    
    ${media.md`
       ${fontSize(14)};
       ${lineHeight(27)};
       max-width: 550px;
    `}
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  
  h2{
    text-align: right;
    ${fontSize(17)};
    ${lineHeight(25)};
    font-weight: 700;
    margin-right: 16px;
  }
  
  p{
    ${fontSize(13)};
    ${lineHeight(23)};
    letter-spacing: .6px;
    margin-top: 2px;
  }
  
  ${media.md`
    justify-content: flex-start
  `}
`

export class AboutScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleOnMobile: false,
        };
        this.updateDimensions = throttle(this.updateDimensions, 500).bind(this);
    };

    updateDimensions() {
        if (window.innerWidth < 768) {
            this.setState({visibleOnMobile: true});
        } else {
            this.setState({visibleOnMobile: false});
        }
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    };

    render() {
        return (
                <>
                    {this.state.visibleOnMobile &&
                        <SocialFooter blackTop/>
                    }
                    <Content>
                        {!this.state.visibleOnMobile &&
                        <SideName>
                            <h2>My name is <br/>Loan Tran Duy</h2>
                            <ul>
                                <li> <a href={cv} download>
                                    Resume
                                </a></li>
                                <li><a href="mailto:tdl.tranduy@gmail.com">Mail</a></li>
                                <li><a target="_blank" rel="noopener noreferrer"
                                       href="https://www.linkedin.com/in/loan-tran-duy-87690a111/">Linkedin</a></li>
                            </ul>

                        </SideName>
                        }
                        <ContentText>
                            <Hello center/>
                            <Name>
                                {this.state.visibleOnMobile &&
                                <h2>My name is <br/>Loan Tran Duy</h2>
                                }
                                <p>Developer,<br/>Designer,<br/>Animal Lover</p>
                            </Name>
                            <Text>I am a Belgian Creative Developer. My approach is dynamic while also keeping clarity and balance in mind. My preference is developing with React and styled component for interactive websites. <br/>Most of all, I would like my clients to have a good experience while respecting the worldwide creators who have influenced me everyday. I am able to design & develope responsive websites that work on a wide range of devices, assist with production of clean and functional design and be the bridge communication gap between designers and developers. I am always ready to meet up and get to know other cool people.</Text>
                        </ContentText>
                    </Content>
                </>

        )
    }
}
