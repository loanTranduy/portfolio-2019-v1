import React, {Component} from 'react'
import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import {CenteredSpinner} from '../components/CenteredSpinner'

class LoadableLoader extends Component {
    static propTypes = {
        error: PropTypes.bool,
    }

    componentDidUpdate() {
        if (this.props.error) {
            //window.location.reload()
        }
    }

    render() {
        return <CenteredSpinner />
    }
}

export const defaultLoader = {
    loading: LoadableLoader,
}

export const createLoadable = (loader, name) => {
    return Loadable({
        loader: () => loader().then(data => data[name]),
        ...defaultLoader,
    })
}
