import React from 'react'
import styled from 'styled-components';
import {colors} from '../styles/default/Colors';
import {FrontEndScreen} from './FrontEndScreen';
import {WebDesignScreen} from './WebDesignScreen';
import {GraphicDesignScreen} from './GraphicDesignScreen';

const Content = styled.div`
  color: ${colors.black};
  padding-top: 50px;
  
  div:nth-child(1){
  background: red;
  }
  div:nth-child(2){
  background: blue;
  }
    div:nth-child(3){
  background: green;
  }
`

export class WorkScreen extends React.Component {
    render() {
        return (
            <Content>
                <h1>All my projects</h1>
                    <FrontEndScreen/>
                    <WebDesignScreen/>
                    <GraphicDesignScreen/>
            </Content>
        )
    }
}



