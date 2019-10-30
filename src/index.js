// Polyfills need to be the first import
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {injectFonts} from './styles/default/Font'

injectFonts()

ReactDOM.render(<App />, document.getElementById('root'))


