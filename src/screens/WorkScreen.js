import React from 'react'
import styled from 'styled-components';
import {colors} from '../styles/default/Colors';
import {FrontEndScreen} from './FrontEndScreen';
import {WebDesignScreen} from './WebDesignScreen';
import {GraphicDesignScreen} from './GraphicDesignScreen';
import {Container} from '../components/SharedStyle';

const Content = styled(Container)`
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
        const{navbarHeight, strokeHeight,sideNavbarHeight} = this.props;
        return (
            <Content navbarHeight={navbarHeight} strokeHeight={strokeHeight} sideNavbarHeight={sideNavbarHeight}>
                <h1>All my projects</h1>
                <FrontEndScreen/>
                <WebDesignScreen/>
                <GraphicDesignScreen/>
            </Content>
        )
    }
}
