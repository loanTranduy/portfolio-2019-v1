import React from 'react'
import {Box, Flex} from '../SharedStyle';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import sydney from '../../assets/images/sydney-opera-house.svg'
import {textColors} from '../../styles/default/Colors';

const BoxFlex = styled(Box)`
  padding: 0;
  margin: 24px auto 0 auto;
  background: rgba(245,248,255,0.40);
  overflow: hidden;
  max-height: 135px;
  img{
    width: 72px;
  }
  
  ${media.md`
    padding: 0;
    margin: 0;
  `}
  
  ${media.xl`
  `}
`

const Text = styled.div`
  ${fontSize(14)};
  ${lineHeight()};
  font-weight: 800;
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 32px;
  
  >p{
    ${fontSize(10)};
    letter-spacing: 0;
    color:${textColors.secondary};
    font-weight: 600;
  }
  ${media.md`
  
  `}
  
  ${media.xl`
  `}
`

const City = styled.h2`
  ${fontSize(22)};
  ${lineHeight()};
  font-weight: 700;
  font-style: italic;
  margin-bottom: 16px;
  //background: linear-gradient(514deg,#64E4DE -50%,#248CBB 50%);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  
  ${media.md`
  
  `}
  
  ${media.xl`
  `}
`

const Header = styled.p`
  text-transform: uppercase;
  ${fontSize(8)};
  ${lineHeight()};
  font-weight: 700;
  font-style: normal;
  opacity: .9px;
  background: rgba(245,248,255,0.90);
  letter-spacing: 2.5px;
  color:${textColors.primary};
  padding: 16px 24px;
  ${media.md`
  
  `}
  
  ${media.xl`
  `}
`

const FlexBox = styled(Flex)`
  padding: 8px 24px;
  ${media.md`
  
  `}
  
  ${media.xl`
  `}
`

export class TownTransparent extends React.Component {
    render() {
        return (
            <BoxFlex>
                <Header>Currently Based in: </Header>
                <FlexBox>
                    <Text>
                        <City>Sydney</City>
                        <p>At least 1 year</p>
                    </Text>
                    <img src={sydney} alt="illustration of sydney"/>
                </FlexBox>
            </BoxFlex>
        )
    }
}
