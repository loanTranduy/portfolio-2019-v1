import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import {Navbar} from './components/Navbar';
import {createLoadable} from './utils/loadable'

const LoadableLandingScreen = createLoadable(
    () =>
        import(/* webpackChunkName: "LandingScreen" */ './screens/LandingScreen'),
    'LandingScreen'
)

const LoadableAboutScreen = createLoadable(
    () =>
        import(/* webpackChunkName: "LandingScreen" */ './screens/AboutScreen'),
    'AboutScreen'
)

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path="/about">
                            <LoadableLandingScreen />
                        </Route>
                        <Route path="/">
                            <LoadableAboutScreen />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
