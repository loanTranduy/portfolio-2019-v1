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
import {Stroke, StrokeTop, TheContainer} from './components/SharedStyle';
import Normalize from 'react-normalize';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import {gridTheme, styledTheme} from './styles/BootstrapCustom';

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
            sideNavbarWidth: 0,
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
            sideNavbarHeight: childData
        })
    };

    sideWidthCallbackFunction = (childData) => {
        this.setState({
            sideNavbarWidth: childData
        })
    };

    render() {
        const{mainNavbarHeight, strokeSize, sideNavbarHeight, sideNavbarWidth} = this.state;
        return (
            <ThemeProvider
                theme={styledTheme}
            >
                <GridThemeProvider
                    gridTheme={gridTheme}
                >
                    <Normalize/>
                    <GlobalStyle
                        strokeSize={strokeSize}
                    />
                    <Router>
                        <Stroke size={strokeSize}/>
                        <StrokeTop size={strokeSize}/>
                        <Navbar
                            parentCallback = {this.callbackFunction}
                            position={strokeSize}
                            navbarHeight={mainNavbarHeight}
                            sideBarHeight={sideNavbarHeight}
                        />
                        <Sidebar
                            parentCallback = {this.sideCallbackFunction}
                            parentCallbackWidth = {this.sideWidthCallbackFunction}
                            position={strokeSize}
                        />
                        <Switch>
                            <TheContainer
                                navbarHeight={mainNavbarHeight}
                                strokeHeight={strokeSize}
                                sideNavbarHeight={sideNavbarHeight}
                                sideNavbarWidth={sideNavbarWidth}
                            >

                            <Route exact path="/" render={() =>
                                <LoadableLandingScreen
                                    navbarHeight={mainNavbarHeight}
                                    strokeHeight={strokeSize}
                                />
                            }/>
                            <Route exact path="/about" render={() =>
                                <LoadableAboutScreen
                                />}
                            />
                            <Route exact path="/work" render={() =>
                                <LoadableWorkScreen
                            />}
                                />
                            <Route path="/work/front-end" render={() =>
                                <LoadableFrontEndScreen
                                />}/>
                            <Route path="/work/web-design" render={() =>
                                <LoadableWebDesignScreen
                                />}/>
                            <Route path="/work/graphic-design" render={() =>
                                <LoadableGraphicDesignScreen
                                />}/>
                            <Route exact path="/contact"render={() =>
                                <LoadableContactScreen
                                />}
                            />
                            </TheContainer>
                        </Switch>
                </Router>
                </GridThemeProvider>
            </ThemeProvider>
        )
    }
}
