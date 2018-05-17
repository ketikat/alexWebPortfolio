import React from 'react'
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import history from './history'

ReactDOM.render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
)
