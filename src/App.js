import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import {Navbar} from './components/navbar/Navbar';
import {createLoadable} from './utils/loadable'
import {GlobalStyle} from './styles/default/reset';

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

    render() {
        return (
            <React.Fragment>
            <GlobalStyle />
            <Router>
                <div>

                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={LoadableLandingScreen}/>
                        <Route path="/about" component={LoadableAboutScreen}/>
                        <Route exact path="/work" component={LoadableWorkScreen}/>
                        <Route path="/contact" component={LoadableContactScreen}/>
                    </Switch>
                </div>
            </Router>
            </React.Fragment>
        )
    }
}
