import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
    LoadableAboutScreen, LoadableContactScreen,
    LoadableFrontEndScreen, LoadableGraphicDesignScreen,
    LoadableLandingScreen, LoadableWebDesignScreen,
    LoadableWorkScreen
} from './ComponentLoadable';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {Layout} from './screens/Layout';
import styled from 'styled-components';

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
    &.fade-appear,
    &.fade-enter {
        opacity: 0;
    }
    
    &.fade-appear-active,
    &.fade-enter-active {
        transition: opacity .3s linear;
        opacity: 1;
    }
    
    &.fade-exit {
        transition: opacity .2s linear;
        opacity: 1;
    }
    
    &.fade-exit-active {
        opacity: 0;
    }
`;

const App = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 300, exit: 300 };

        return (
            <Layout>
                <TransitionGroup component={null}>
                    <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
                        <Section>
                        <Switch location={location}>
                            <Route exact path="/" render={() =>
                                <LoadableLandingScreen
                                    navbarHeight={30}
                                    strokeHeight={5}
                                />
                            }/>
                            <Route exact path="/about" render={() => <LoadableAboutScreen/>}/>
                            <Route exact path="/work" render={() => <LoadableWorkScreen/>}/>
                            <Route exact path="/work/front-end" render={() => <LoadableFrontEndScreen/>}/>
                            <Route exact path="/work/web-design" render={() => <LoadableWebDesignScreen/>}/>
                            <Route exact path="/work/graphic-design" render={() => <LoadableGraphicDesignScreen/>}/>
                            <Route exact path="/contact"render={() => <LoadableContactScreen/>}
                            />
                        </Switch>
                        </Section>
                    </CSSTransition>
                </TransitionGroup>
            </Layout>
    )
}

export default withRouter(App)
