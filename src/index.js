import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

setTimeout(console.log.bind(console,"%cDesigned & Developed with <3 by https://www.linkedin.com/in/loan-tran-duy-87690a111/ in 2019","color: #fff;background-color: #F46183;border:6px solid #F46183;"));

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app'));
