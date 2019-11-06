import React from 'react'
import {Box} from '../SharedStyle';
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import styled from 'styled-components';
import sydney from '../../assets/images/sydney-opera-house.svg'

const BoxFlex = styled(Box)`
  border-top-right-radius: 0;
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  max-height: 150px;
  //margin: 24px auto 12px auto;
  width: 100%;
  
  p:nth-child(1){
      font-weight: 700;
      font-style: normal;
      margin-bottom: 8px;
  }
  
  img{
    width: 40%;
  }
`

const Text = styled.div`
  ${fontSize(14)};
  ${lineHeight()};
  font-weight: 800;
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const City = styled.p`
  ${fontSize(28)};
  ${lineHeight()};
  font-weight: 800;
  font-style: italic;
  margin-bottom: 24px;
  background: linear-gradient(144deg, #64E4DE 0%, #248CBB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export class Town extends React.Component {
    render() {
        return (
            <BoxFlex border>
                <Text>
                    <div>
                    <p>Currently Based in: </p>
                    <City>Sydney</City>
                    </div>
                    <p>At least 1 year</p>
                </Text>
                <img src={sydney} alt="illustration of sydney"/>
            </BoxFlex>
        )
    }
}
