import React from 'react'
import {Box, Flex} from '../SharedStyle';
import {fontSize} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';
import sydney from '../../assets/images/sydney-opera-house.svg'
import {textColors} from '../../styles/default/Colors';

const BoxFlex = styled(Box)`
  padding: 0;
  margin: 24px auto 0 auto;
  background: rgba(245,248,255,0.40);
  overflow: hidden;
  max-height: 115px;
  
  img{
    height: 70px;
    width: 72px;
  }
  
  ${media.md`
    padding: 0;
    margin: 0;
    width: 179px;
    img{
      width: 60px;
    }
  `}
  
  ${media.lg`
    width: 209px;
    img{
      width: 64px;
    }
  `}
  
   ${media.xl`
    width: 228px;
   `}
`

const Text = styled.div`
  ${fontSize(14)};
  font-weight: 800;
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 32px;
  
  >p{
    ${fontSize(9)};
    letter-spacing: 0;
    color:${textColors.secondary};
    font-weight: 600;
  }
  
  ${media.md`
  margin-right: 16px;
  >p{
    ${fontSize(9)};
  }
  `}
  
  ${media.lg`
    >p{
        ${fontSize(10)};
    }
  `}
`

const City = styled.h2`
  ${fontSize(22)};
  font-weight: 700;
  font-style: italic;
  margin-bottom: 16px;
  
  ${media.md`
    ${fontSize(18)};
  `}
`

const Header = styled.p`
  text-transform: uppercase;
  ${fontSize(7)};
  font-weight: 700;
  font-style: normal;
  opacity: .9;
  background: rgba(245,248,255,0.90);
  letter-spacing: 2.5px;
  color:${textColors.primary};
  padding: 14px 24px;
`

const FlexBox = styled(Flex)`
  padding: 4px 24px;
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
