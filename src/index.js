import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
setTimeout(console.log.bind(console,"%cDesigned & Developed with <3 by https://loantranduy.com","color: #fff;background-color: #F46183;border:6px solid #F46183;"));
ReactDOM.render((
    <Router onUpdate={() => window.scrollTo(0, 0)} >
        <App/>
    </Router>
), document.getElementById('app'));
