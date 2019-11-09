import React from 'react'
import {GlobalStyle} from '../styles/default/reset';
import {Stroke, StrokeTop, TheContainer} from '../components/SharedStyle';
import {Navbar} from '../components/navbar/Navbar';
import {Sidebar} from '../components/sidebar/Sidebar';
import {ThemeProvider} from 'styled-components';
import {gridTheme, styledTheme} from './../styles/BootstrapCustom';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import Normalize from 'react-normalize';

export class Layout extends React.Component {
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
        const {sideNavbarWidth, strokeSize, mainNavbarHeight, sideNavbarHeight} = this.state;
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
                    <TheContainer
                        navbarHeight={mainNavbarHeight}
                        strokeHeight={strokeSize}
                        sideNavbarHeight={sideNavbarHeight}
                        sideNavbarWidth={sideNavbarWidth}
                    >
                        {this.props.children}
                    </TheContainer>
                </GridThemeProvider>
            </ThemeProvider>
        )
    }
}
