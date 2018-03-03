import React from 'react'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './components/App.js'


ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <App />
  </Router>
  ,
  document.getElementById('root')
)
