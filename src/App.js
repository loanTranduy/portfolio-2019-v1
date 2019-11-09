import React, {useState} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
    LoadableAboutScreen, LoadableContactScreen,
    LoadableFrontEndScreen, LoadableGraphicDesignScreen,
    LoadableLandingScreen, LoadableWebDesignScreen,
    LoadableWorkScreen
} from './ComponentLoadable';
import { TransitionGroup } from 'react-transition-group'
import {Layout} from './screens/Layout';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import {Section} from './components/SharedStyle';
import SkillsPage from './screens/SkillsPage';

const timeout = 900;

const Page = styled.div`
  position: ${({ state }) => (state === "entering"  ? "absolute" : "inherit")};
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity ${timeout}ms ease-in-out;
  ${Section} {
    transition: all ${timeout}ms ease-in-out;
    transform: translateX(${({state}) => (state === "entering" ? 100 : 0)}%);
    opacity: ${({state}) => (state === "entered" ? 1 : 0) };
  }
`;

const App = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const [animate, setAnimate] = useState(false);
        return (
            <Layout>
                <TransitionGroup component={null}>
                    <Transition key={currentKey} in={animate} timeout={timeout} appear>
                        {(state) => (
                        <Page state={state}>
                        <Switch location={location}>
                            <Route exact path="/home" render={() => <LoadableLandingScreen navbarHeight={30} strokeHeight={5}/>}/>
                            <Route exact path="/about" render={() => <LoadableAboutScreen/>}/>
                            <Route exact path="/work" component={LoadableWorkScreen}/>
                            <Route exact path="/work/front-end" render={() => <LoadableFrontEndScreen/>}/>
                            <Route exact path="/work/web-design" render={() => <LoadableWebDesignScreen/>}/>
                            <Route exact path="/work/graphic-design" render={() => <LoadableGraphicDesignScreen/>}/>
                            <Route exact path="/contact"render={() => <LoadableContactScreen/>}
                            />
                        </Switch>
                        </Page>
                            )}
                    </Transition>
                </TransitionGroup>
            </Layout>
    )
}

export default withRouter(App)
