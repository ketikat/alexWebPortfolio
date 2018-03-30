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
import CV from '../views/CV'

function RenderFadeInComponent (Component, props) {
  const title = props.match.params.title

  return (
        <CSSTransition timeout={400} classNames="fade" in={true}>
          <Component props={props} title={title} />
        </CSSTransition>
  )
}


class App extends Component {
  componentDidMount() {
      document.getElementById("root").className = "show"
      document.getElementById("loader").className = "delete"
  }

  render() {
    return (
      <div id="app">
          <Menu />
          <MobileNav />
          <TransitionGroup>
            <Switch>
              <Route exact path="/" component={(props) => RenderFadeInComponent(AllProjects, props)} />
              <Route exact path="/about" component={(props) => RenderFadeInComponent(About, props)} />
              <Route exact path="/contact" component={(props) => RenderFadeInComponent(Contact, props)} />
              <Route exact path="/:title" component={(props) => RenderFadeInComponent(SingleProject, props )} />
            </Switch>
          </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(App)



