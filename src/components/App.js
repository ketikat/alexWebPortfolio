import React, {Component} from 'react'
import {Route, Link, browserHistory, Redirect, withRouter, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
require('../styles/app.css')

import {TransitionGroup, CSSTransition} from 'react-transition-group'


import Menu from './Menu'
import MobileNav from './MobileNav'
import About from '../views/About'
import Contact from '../views/Contact'
import AllProjects from '../views/AllProjects'
import SingleProject from '../views/SingleProject'

const RenderFadeInComponent = Component => (
  <CSSTransition timeout={400} classNames="fade" in={true}>
    <Component />
  </CSSTransition>
)


class App extends Component {
  componentDidMount() {
      document.getElementById("root").className = "show"
      document.getElementById("loader").className = "delete"
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
          <Menu />
          <MobileNav />
          <TransitionGroup>
            <Switch>
              <Route exact path="/" component={() => RenderFadeInComponent(AllProjects)} />
              <Route exact path="/about" component={() => RenderFadeInComponent(About)} />
              <Route exact path="/contact" component={() => RenderFadeInComponent(Contact)} />
              <Route exact path="/:title" component={() => RenderFadeInComponent(SingleProject)} />
              <Route exact path="/cv" component={() => RenderFadeInComponent(SingleProject)} />
            </Switch>
          </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(App)



