import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import {Navbar} from './components/navbar/Navbar';
import {createLoadable} from './utils/loadable'
import {GlobalStyle} from './styles/default/reset';
import {Sidebar} from './components/sidebar/Sidebar';
import {Stroke, StrokeTop} from './components/SharedStyle';
import Normalize from 'react-normalize';
import {injectFonts} from './styles/default/Font';

const LoadableWebDesignScreen = createLoadable(
    () => import(/* webpackChunkName: "WebDesignScreen" */ './screens/WebDesignScreen'),
    'WebDesignScreen'
)

const LoadableGraphicDesignScreen = createLoadable(
    () => import(/* webpackChunkName: "FrontEndScreen" */ './screens/GraphicDesignScreen'),
    'GraphicDesignScreen'
)

const LoadableFrontEndScreen = createLoadable(
    () => import(/* webpackChunkName: "FrontEndScreen" */ './screens/FrontEndScreen'),
    'FrontEndScreen'
)

const LoadableContactScreen = createLoadable(
    () => import(/* webpackChunkName: "ContactScreen" */ './screens/ContactScreen'),
    'ContactScreen'
)

const LoadableWorkScreen = createLoadable(
    () => import(/* webpackChunkName: "WorkScreen" */ './screens/WorkScreen'),
    'WorkScreen'
)

const LoadableAboutScreen = createLoadable(
    () => import(/* webpackChunkName: "AboutScreen" */ './screens/AboutScreen'),
    'AboutScreen'
)

const LoadableLandingScreen = createLoadable(
    () => import(/* webpackChunkName: "LandingScreen" */ './screens/LandingScreen'),
    'LandingScreen',
)

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainNavbarHeight: 0,
            strokeSize: 10,
            sideNavbarHeight: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight });
    }

    callbackFunction = (childData) => {
        this.setState({
            mainNavbarHeight: childData})
    };

    sideCallbackFunction = (childData) => {
        this.setState({
            sideNavbarHeight: childData})
    };

    render() {
        return (
            <React.Fragment>
                <injectFonts/>
                <Normalize/>
                <GlobalStyle
                    strokeSize={this.state.strokeSize}
                />
                <Router>
                    <Stroke size={this.state.strokeSize}/>
                        <StrokeTop size={this.state.strokeSize}/>
                        <Navbar
                            parentCallback = {this.callbackFunction}
                            position={this.state.strokeSize}
                            navbarHeight={this.state.mainNavbarHeight}
                            sideBarHeight={this.state.sideNavbarHeight}
                        />
                        <Sidebar
                            parentCallback = {this.sideCallbackFunction}
                            position={this.state.strokeSize}
                        />
                        <Switch>
                            <Route exact path="/" render={() =>
                                <LoadableLandingScreen
                                    navbarHeight={this.state.mainNavbarHeight}
                                    strokeHeight={this.state.strokeSize}
                                    sideNavbarHeight={this.state.sideNavbarHeight}
                                />
                            }/>
                            <Route path="/about" render={() =>
                                <LoadableAboutScreen
                                    navbarHeight={this.state.mainNavbarHeight}
                                    strokeHeight={this.state.strokeSize}
                                    sideNavbarHeight={this.state.sideNavbarHeight}
                                />}
                            />
                            <Route exact path="/work" render={() =>
                                <LoadableWorkScreen
                                navbarHeight={this.state.mainNavbarHeight}
                                strokeHeight={this.state.strokeSize}
                                sideNavbarHeight={this.state.sideNavbarHeight}
                            />}
                                />
                            <Route path="/work/front-end" render={() =>
                                <LoadableFrontEndScreen
                                    navbarHeight={this.state.mainNavbarHeight}
                                    strokeHeight={this.state.strokeSize}
                                    sideNavbarHeight={this.state.sideNavbarHeight}
                                />}/>
                            <Route path="/work/web-design" render={() =>
                                <LoadableWebDesignScreen
                                    navbarHeight={this.state.mainNavbarHeight}
                                    strokeHeight={this.state.strokeSize}
                                    sideNavbarHeight={this.state.sideNavbarHeight}
                                />}/>
                            <Route path="/work/graphic-design" render={() =>
                                <LoadableGraphicDesignScreen
                                    navbarHeight={this.state.mainNavbarHeight}
                                    strokeHeight={this.state.strokeSize}
                                    sideNavbarHeight={this.state.sideNavbarHeight}
                                />}/>
                            <Route path="/contact"render={() =>
                                <LoadableContactScreen
                                    navbarHeight={this.state.mainNavbarHeight}
                                    strokeHeight={this.state.strokeSize}
                                    sideNavbarHeight={this.state.sideNavbarHeight}
                                />}
                            />
                        </Switch>
                </Router>
            </React.Fragment>
        )
    }
}
