import {Component} from 'react'
import PropTypes from 'prop-types'

export class ScrollBlocker extends Component {
    static propTypes = {
        active: PropTypes.bool,
        children: PropTypes.node,
    };

    componentDidMount() {
        document.body.classList.toggle('disable-scroll', this.props.active)
    };

    componentWillReceiveProps(nextProps) {
        document.body.classList.toggle('disable-scroll', nextProps.active)
    };

    componentWillUnmount() {
        document.body.classList.remove('disable-scroll', this.props.active)
    };

    render() {
        return this.props.children
    };
}
