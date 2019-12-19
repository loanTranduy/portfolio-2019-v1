import React, {Fragment, useState} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
    LoadableAboutScreen,
    LoadableFrontEndScreen, LoadableGraphicDesignScreen,
    LoadableLandingScreen, LoadableWebDesignScreen,
    LoadableWorkScreen
} from './ComponentLoadable';
import {TransitionGroup} from 'react-transition-group'
import {Layout} from './styles/Layout';
import styled  from "styled-components";
import {Transition} from 'react-transition-group';
import {SectionLanding, SectionTop} from './screens/LandingScreen';
import {ContentText, SideName} from './screens/AboutScreen';
import {SideInfo} from './components/skills/side-infos/SideInfos';
import {ProjectContainer} from './screens/SkillsScreen';
import {media} from './styles/default/Mediaqueries';
import {BoxPageTransition, ShapeOverlays} from './components/loading/PageTransition';
import {FrontEndProject} from './components/skills/front-end/FrontEndProject';
import {WebDesignProject} from './components/skills/web-design/WebDesignProject';
import {GraphicDesignProject} from './components/skills/graphic-design/GraphicDesignProject';
import ScrollToTop from './components/loading/ScrollToTop';
import {InjectFont} from './styles/default/Font';
import {ContentInside} from './components/skills/front-end/FrontEndProjectMockup';
import {ContentInside as ContentInsideGrap} from './components/skills/graphic-design/GraphicDesignProjectMockup';
import {ContentInsideWeb} from './components/skills/web-design/WebDesignProjectMockup';

const timeout = 500;
const timeoutHigh = 800;
const Page = styled.div`
  position: ${({ state }) => (state === "entering"  ? "absolute" : "inherit")};
  top: 0;
  left: 0;
  width: 100%;
  ${SectionLanding}{
      div{
        opacity: ${({state}) => (state === "entered" ? 1 : 0) };
      }
      div:nth-child(1){
        transition: opacity ${timeoutHigh}ms ease-in-out ${({state}) => (state === "entered" ? .2 : 0)}s;
      }
      div:nth-child(2){
        transition: opacity ${timeoutHigh}ms ease-in-out ${({state}) => (state === "entered" ? .6 : 0)}s;
      }
      div:nth-child(3){
        transition: opacity ${timeoutHigh}ms ease-in-out ${({state}) => (state === "entered" ? .8 : 0)}s;
      }
      div:nth-child(4){
        transition: opacity ${timeoutHigh}ms ease-in-out ${({state}) => (state === "entered" ? .9 : 0)}s;
      }
      div:nth-child(5){
        transition: opacity ${timeoutHigh}ms ease-in-out ${({state}) => (state === "entered" ? .3 : 0)}s;
      }
  }
  ${ProjectContainer}{
      a{
        opacity: ${({state}) => (state === "entered" ? 1 : 0) };
      }
      
      a:nth-child(1){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .5 : 0)}s;
      }
      a:nth-child(2){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .7 : 0)}s;
      }
      a:nth-child(3){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .9 : 0)}s;
      }
      a:nth-child(4){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .6 : 0)}s;
      }
      a:nth-child(5){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .8 : 0)}s;
      }
      a:nth-child(6){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1 : 0)}s;
      }
      a:nth-child(7){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.3 : 0)}s;
      }
      a:nth-child(8){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.1 : 0)}s;
      }
      a:nth-child(9){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.2 : 0)}s;
      }
      a:nth-child(10){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.4 : 0)}s;
      }
      a:nth-child(11){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .9 : 0)}s;
      }
      a:nth-child(12){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.3 : 0)}s;
      }
      a:nth-child(13){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.1 : 0)}s;
      }
      a:nth-child(14){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .5 : 0)}s;
      }
      a:nth-child(15){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.4 : 0)}s;
      }
      a:nth-child(16){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? .2 : 0)}s;
      }
      a:nth-child(17){
        transition: opacity ${timeout}ms ease-in-out ${({state}) => (state === "entered" ? 1.5 : 0)}s;
      }
  }
  
  ${BoxPageTransition} {
      animation: ${({state}) => (state === "entered" ? 'test' : ' ' )} 1.5s ease-in-out;
  }
    
  ${ShapeOverlays}{
    path{
      animation: ${({state}) => (state === "entered" ? 'testD' : ' ' )} 1s ease-in-out;
    }
  }
  
  ${SideName}{
    transition: all ${timeout}ms ease-in-out ;
    transform: translateX(${({state}) => (state === "entering" ? -101 :  0)}%);
  }
  
  ${SectionTop}, ${ContentInside}, ${ContentInsideGrap}, ${ContentInsideWeb} {
    transition: all ${timeout}ms ease-in-out;
    opacity: ${({state}) => (state === "entered" ? 1 : 0) };
  }
  
  ${SideInfo} {
    section{
      opacity: ${({state}) => (state === "entered" ? 1 : 0) };
      transition: opacity ${timeout}ms ease-in-out .4s;
    }
  }
  
  ${ContentText} {
    transition: all 500ms ease-in-out .5s;
    opacity: ${({state}) => (state === "entered" ? 1 : 0) };
  }
  
  ${media.xl`
      ${SideInfo} {
        transition: all ${timeout}ms ease-in-out;
        transform: translateX(${({state}) => (state === "entering" ? 100 : (state === 'exiting' ? 0 :  0))}%);
      }
  `}
`;

const App = ({ location }) => {
    const currentKey = location.pathname;
    const [animate] = useState(false);
        return (
            <Fragment>
                <InjectFont/>
                <ScrollToTop/>
                {/*<LoadableLoader/>*/}
                {/*<OrganicShape/>*/}
                {/*<Percentage/>*/}
            <Layout url={currentKey}>
                <TransitionGroup component={null}>
                    <Transition key={currentKey} in={animate} timeout={timeout} appear>
                        {(state) => (
                        <Page state={state}>
                            {/*<PageTransition/>*/}
                        <Switch location={location}>
                            <Route exact path="/" render={() => <LoadableLandingScreen navbarHeight={30} strokeHeight={5}/>}/>
                            <Route exact path="/about" render={() => <LoadableAboutScreen/>}/>
                            <Route exact path="/work/all" component={LoadableWorkScreen}/>
                            <Route exact path="/work/front-end" render={() => <LoadableFrontEndScreen navbarHeight={30}/>}/>
                            <Route exact path="/work/web-design" render={() => <LoadableWebDesignScreen/>}/>
                            <Route exact path="/work/graphic-design" render={() => <LoadableGraphicDesignScreen/>}/>
                            <Route path={`/work/front-end/:slug`} component={FrontEndProject} />
                            <Route path={`/work/web-design/:slug`} component={WebDesignProject} />
                            <Route path={`/work/graphic-design/:slug`} component={GraphicDesignProject} />
                        </Switch>
                        </Page>
                            )}
                    </Transition>
                </TransitionGroup>
            </Layout>
            </Fragment>
    )
}

export default withRouter(App)
